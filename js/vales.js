const flipCards = document.querySelectorAll('.flip-card-inner');
const nextBtn = document.getElementById('nextGiftBtn');

// Flip al hacer click
flipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Botón siguiente regalo
nextBtn.addEventListener('click', () => {
  window.location.href = 'elements.html'; // Página del álbum
});

