// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

function searchShoes() {
  const searchPanel = document.querySelector(".search-panel");
  if (!searchPanel) return;

  const searchForm = searchPanel.querySelector("form.search-panel__form");
  if (!searchForm) return;

  const searchInput = searchForm.querySelector(".input-search");
  if (!searchInput) return;

  const searchResultList = searchPanel.querySelector(".search-results");
  if (!searchResultList) return;

  const sanitizeHTML = (str) => {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };
  searchResultList.innerHTML = "";
  searchInput.addEventListener("input", function (e) {
    const inputValue = e.target.value.trim().toLowerCase();
    searchResultList.innerHTML = "";

    if (inputValue === "") {
      searchResultList.innerHTML = "";
      return;
    }

    for (const shoe in shoesDB) {
      if (!Object.hasOwnProperty.call(shoesDB, shoe)) continue;

      const shoesName = shoesDB[shoe].name.toLowerCase();
      if (shoesName.includes(inputValue)) {
        const { name, link, img, description, price } = shoesDB[shoe];
        const listItem = document.createElement("li");
        listItem.classList.add("search-results__item");
        listItem.innerHTML = `
          <a href="${sanitizeHTML(link)}" class="search-results__link search-product">
            <div class="search-product__image-ibg"><img src="${sanitizeHTML(img)}" alt=""></div>
            <h2 class="search-product__name">${sanitizeHTML(name)}</h2>
            <p class="search-product__description">${sanitizeHTML(description)}</p>
            <p class="search-product__price">${sanitizeHTML(price)}</p>
          </a>
        `;
        searchResultList.appendChild(listItem);
      }
    }
  });
}
function toggleSearchPanel() {
  const searchButton = document.querySelector(".user-bar__search");
  if (searchButton) {
    const searchPanel = document.querySelector(".search-panel");
    const searchCloseButton = searchPanel.querySelector("button");
    const searchForm = searchPanel.querySelector("form.search-panel__form");
    searchButton.addEventListener("click", function (e) {
      searchPanel.classList.add("_open");
    });
    searchCloseButton.addEventListener("click", function (e) {
      searchPanel.classList.remove("_open");
      searchForm.reset();
    });
  }
}
// function changeProductImage() {
//   const productItems = document.querySelectorAll(".product-page__item");
//   if (productItems.length) {
//     productItems.forEach((productItem) => {
//       const mainImage = productItem.querySelector(".product-item__image-ibg img");
//       const colorways = productItem.querySelectorAll(".product-item__colorway");

//       colorways.forEach((colorway) => {
//         const colorwayImage = colorway.querySelector(".product-item__colorway-image-ibg img");

//         colorway.addEventListener("mouseenter", function () {
//           const imageUrl = colorwayImage.getAttribute("src");
//           mainImage.setAttribute("src", imageUrl);
//         });

//         colorway.addEventListener("mouseleave", function () {
//           const initialImageUrl = mainImage.getAttribute("data-initial-src");
//           mainImage.setAttribute("src", initialImageUrl);
//         });
//       });

//       const initialImageUrl = mainImage.getAttribute("src");
//       mainImage.setAttribute("data-initial-src", initialImageUrl);
//     });
//   }
// }

function changeProductImage() {
  const productItems = document.querySelectorAll(".product-page__item");
  if (productItems.length) {
    productItems.forEach((productItem) => {
      const mainImage = productItem.querySelector(".product-item__image-ibg img");
      const mainSource = productItem.querySelector(".product-item__image-ibg source");
      const colorways = productItem.querySelectorAll(".product-item__colorway");

      colorways.forEach((colorway) => {
        const colorwayImage = colorway.querySelector(".product-item__colorway-image-ibg img");
        const colorwaySource = colorway.querySelector(".product-item__colorway-image-ibg source");

        colorway.addEventListener("mouseenter", function () {
          const imageUrl = colorwayImage.getAttribute("src");
          mainImage.setAttribute("src", imageUrl);
          if (mainSource) {
            const imageSrcset = colorwaySource.getAttribute("srcset");
            mainSource.setAttribute("srcset", imageSrcset);
          }
        });

        colorway.addEventListener("mouseleave", function () {
          const initialImageUrl = mainImage.getAttribute("data-initial-src");
          mainImage.setAttribute("src", initialImageUrl);
          if (mainSource) {
            const initialImageSrcset = mainSource.getAttribute("data-initial-srcset");
            mainSource.setAttribute("srcset", initialImageSrcset);
          }
        });
      });

      const initialImageUrl = mainImage.getAttribute("src");
      mainImage.setAttribute("data-initial-src", initialImageUrl);

      if (mainSource) {
        const initialImageSrcset = mainSource.getAttribute("srcset");
        mainSource.setAttribute("data-initial-srcset", initialImageSrcset);
      }
    });
  }
}

const shoesDB = {
  nikeAirMaxDn: {
    name: "nike air max dn",
    img: "img/shoes/air-max-dn/air-max-dn-mens-shoes.png",
    description: "men's shoes",
    price: "160$",
    link: "mozz/nikeAirMaxDn",
  },
  nikeAirForce1: {
    name: "nike air force 1",
    img: "img/shoes/nike-air-force1/01.png",
    description: "men's shoes",
    price: "115$",
    link: "mozz/nikeAirForce1",
  },
  nikeDunkLowRetroPremium: {
    name: "nike dunk low retro premium",
    img: "img/shoes/nike-dunk-low-retro-premium/01.png",
    description: "men's shoes",
    price: "125$",
    link: "mozz/nikeDunkLow",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  toggleSearchPanel();
  searchShoes();
  changeProductImage();
});
