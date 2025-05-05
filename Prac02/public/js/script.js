// Muestra el año actual automáticamente en el footer
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  if (footer) {
    footer.innerHTML += " | &copy; " + year;
  }
});
