const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownList = document.querySelector(".dropdown-list");
// const dropdownArrow = document.querySelector(".dropdown-arrow");

dropdownBtn.addEventListener("click", () => {
  //   dropdownArrow.classList.toggle("dropdown-arrow-color");
  //   dropdownArrow.classList.toggle("dropdown-arrow__rotate");
  dropdownBtn.classList.toggle("active");
  dropdownList.classList.contains("visible")
    ? dropdownList.classList.remove("visible")
    : dropdownList.classList.add("visible");
});

document.querySelectorAll(".dropdown-list__item").forEach((listItem) => {
  listItem.addEventListener("click", () => {
    dropdownBtn.innerText = listItem.innerText;
    dropdownList.classList.contains("visible")
      ? dropdownList.classList.remove("visible")
      : dropdownList.classList.add("visible");
    dropdownBtn.classList.toggle("active");
  });
});
