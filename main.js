import RangeValue from "./modules/range.js";
import FilesForm from "./modules/formFiles.js";

FilesForm();
RangeValue();

//полифил для метода forEach для NodeList IE.
// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg || window;
//     for (var i = 0; i < this.length; i++) {
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownList = document.querySelector(".dropdown-list");
const dropdownArrow = document.querySelector(".dropdown-arrow");
const dropdownListItem = document.querySelectorAll(".dropdown-list__item");

//отображение выпадающего списка
dropdownBtn.addEventListener("click", () => {
  //   dropdownArrow.classList.toggle("dropdown-arrow-color");
  dropdownArrow.classList.toggle("dropdown-arrow__rotate");
  chechDropdonwList();
});

//выбор элемента выпадающего списка
dropdownListItem.forEach((listItem) => {
  listItem.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownBtn.innerText = this.innerText;
    chechDropdonwList();
    dropdownArrow.classList.remove("dropdown-arrow__rotate");
    //в данный input запишем значение выбранного типа из выпадающего списка
    document.querySelector(".dropdown-input__hidden").value =
      this.dataset.value;
  });
});

//закрываем выпадающий список по клику вне списка
document.addEventListener("click", function (event) {
  if (event.target !== dropdownBtn) {
    closeDropdownlist();
  }
});

//закрываем выпадающий список по кнопке escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeDropdownlist();
  }
});

// закрытие списка по кнопке и клику
function closeDropdownlist() {
  dropdownList.classList.remove("visible");
  dropdownBtn.classList.remove("active");
  dropdownArrow.classList.remove("dropdown-arrow__rotate");
}

//проверка выпадающего списка
function chechDropdonwList() {
  dropdownList.classList.contains("visible")
    ? dropdownList.classList.remove("visible")
    : dropdownList.classList.add("visible");
  dropdownBtn.classList.toggle("active");
}
