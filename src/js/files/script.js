// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

const searchButton = document.querySelector(".user-bar__search");
if (searchButton) {
  const searchPanel = document.querySelector(".search-panel");
  const searchCloseButton = searchPanel.querySelector("button");
  searchButton.addEventListener("click", function (e) {
    searchPanel.classList.add("_open");
  });
  searchCloseButton.addEventListener("click", function (e) {
    searchPanel.classList.remove("_open");
  });
}
