(() => {
  // src/js/cambiarEstado.js
  (function() {
    const cambiarEstadoButtons = document.querySelectorAll(".cambiar-estado");
    cambiarEstadoButtons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        const { propiedadId } = e.target.dataset;
        try {
          const response = await fetch("/propiedades/" + propiedadId, {
            method: "PUT"
          });
          const result = await response.json();
          if (result) {
            if (e.target.textContent === "No publicado") {
              e.target.classList.remove("bg-orange-200", "text-orange-800");
              e.target.classList.add("bg-green-200", "text-green-800");
              e.target.textContent = "Publicado";
            } else {
              e.target.classList.add("bg-orange-200", "text-orange-800");
              e.target.classList.remove("bg-green-200", "text-green-800");
              e.target.textContent = "No publicado";
            }
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
  })();
})();
