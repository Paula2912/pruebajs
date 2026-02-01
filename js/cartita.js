const openBtn = document.getElementById('openBtn');
const letter = document.getElementById('letter');
const flap = document.querySelector('.flap');
const nextGiftBtn = document.getElementById('nextGiftBtn');

openBtn.addEventListener('click', () => {
  flap.classList.add('open');       // Flap se levanta
  setTimeout(() => {
    letter.classList.add('open');   // Carta se despliega
    nextGiftBtn.style.display = 'inline-block'; // Muestra botón
  }, 600);
  openBtn.style.display = 'none';   // Oculta botón de abrir
});

// Botón de siguiente regalo
nextGiftBtn.addEventListener('click', () => {
  window.location.href = 'elements.html'; // Cambia a la siguiente página
});
