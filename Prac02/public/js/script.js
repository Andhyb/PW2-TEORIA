// Muestra el año actual automáticamente en el footer
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  if (footer) {
    footer.innerHTML += " | &copy; " + year;
  }

// script para el formulario de contactame.html
  const formulario = document.getElementById("form-contacto");
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombres").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const asunto = document.getElementById("asunto").value.trim();
      const contenido = document.getElementById("contenido").value.trim();
      const mensaje = document.getElementById("mensaje-validacion");

      if (!nombre || !correo || !asunto || !contenido) {
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor, completa todos los campos requeridos.";
      } else {
        mensaje.style.color = "green";
        mensaje.textContent = "Formulario completado correctamente (no se envía).";
      }
    });
  }
});
