function getRangeValue() {
  let rangeInput = document.querySelector(".form-range__input");
  let rangeValue = document.querySelector(".range-value");
  rangeValue.textContent = rangeInput.value;
  rangeInput.oninput = () => {
    rangeValue.textContent = rangeInput.value + " %";
  };
}

export default getRangeValue;
