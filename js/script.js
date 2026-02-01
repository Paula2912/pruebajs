// Seleccionamos los botones por su ID
const infoBtn = document.getElementById("infoBtn");
const continueBtn = document.getElementById("continueBtn");

// Cuando se pulsa "Info" → ir a info.html
infoBtn.addEventListener("click", () => {
  window.location.href = "info.html";
});

// Cuando se pulsa "Continuar" → ir a elements.html
continueBtn.addEventListener("click", () => {
  window.location.href = "pre.html"; // cambia aquí si quieres otra página
});
