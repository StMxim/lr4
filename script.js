document.addEventListener("DOMContentLoaded", function () {
  console.log("Документ завантажено");

  const dateElement = document.createElement("p");
  dateElement.textContent = `Поточна дата: ${new Date().toLocaleDateString(
    "uk-UA"
  )}`;
  document.body.appendChild(dateElement);
});
