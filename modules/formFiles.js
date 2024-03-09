const filesFromForm = document.querySelectorAll(".form-file");

function checkFiles() {
  filesFromForm.forEach(function (input) {
    input.addEventListener("change", function () {
      let filesCount = input.files.length;
      let textElement = input.previousElementSibling;

      if (input.value !== "") {
        textElement.textContent = "Выбрано файлов: " + filesCount;
      } else {
        textElement.textContent = "Выберите файлы";
      }
    });
  });
}

export default checkFiles;
