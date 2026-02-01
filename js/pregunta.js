const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// Función para crear corazones flotando
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = '-50px';
  heart.style.fontSize = (20 + Math.random() * 30) + 'px';
  heart.style.opacity = 0.8;
  heart.style.pointerEvents = 'none';
  heart.style.transition = 'top 3s linear, opacity 3s linear';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = window.innerHeight + 'px';
    heart.style.opacity = 0;
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Si dice Sí
yesBtn.addEventListener('click', () => {
  message.textContent = '¡Ya puedes besar a tu Limoncín! ';

  // Crear varios corazones
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }

  // Desactivar botones después de Sí
  yesBtn.disabled = true;
  noBtn.disabled = true;
});

// Si dice No
noBtn.addEventListener('click', () => {
  message.textContent = '¡Venga, inténtalo de nuevo, preciosa! ';
});
