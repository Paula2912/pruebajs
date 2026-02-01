const gallery = document.querySelector('.gallery');
const frames = document.querySelectorAll('.frame');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const continueBtn = document.getElementById('continueBtn');

let index = 0;
const visibleFrames = 3; // cuántas fotos se ven a la vez
const frameWidth = frames[0].offsetWidth + 20; // ancho más gap

function updateGallery() {
  gallery.style.transform = `translateX(${-index * frameWidth}px)`;

  // Mostrar botón continuar si llegamos al final
  if (index >= frames.length - visibleFrames) {
    continueBtn.style.display = 'inline-block';
  } else {
    continueBtn.style.display = 'none';
  }
}

prevBtn.addEventListener('click', () => {
  index = Math.max(index - 1, 0);
  updateGallery();
});

nextBtn.addEventListener('click', () => {
  index = Math.min(index + 1, frames.length - visibleFrames);
  updateGallery();
});

continueBtn.addEventListener('click', () => {
  window.location.href = 'pregunta.html'; // Página final de San Valentín
});

// Inicializar
updateGallery();
