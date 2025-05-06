document.addEventListener("DOMContentLoaded", function () {
  // Muestra el año actual en el footer
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  if (footer) {
    footer.innerHTML += " | © " + year;
  }

  // Validacin del formulario de contactame.html
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
        mensaje.textContent = "Formulario completado correctamente.";
      }
    });
  }

  // Función para galería (modal de imágenes)
  const imagenes = document.querySelectorAll(".galeria img");
  const modal = document.getElementById("modal-img");
  const imgAmpliada = document.getElementById("img-ampliada");
  const cerrarBtn = document.getElementById("cerrar-modal");

  if (imagenes.length && modal && imgAmpliada && cerrarBtn) {
    imagenes.forEach(imagen => {
      imagen.addEventListener("click", () => {
        imgAmpliada.src = imagen.src;
        modal.style.display = "flex";
      });
    });

    cerrarBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});

