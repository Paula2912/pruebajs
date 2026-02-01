const gift1 = document.getElementById('gift1');
const gift2 = document.getElementById('gift2');
const gift3 = document.getElementById('gift3');

// Cada regalo puede redirigir a su página correspondiente
gift1.addEventListener('click', () => {
  window.location.href = 'cartita.html';
});

gift2.addEventListener('click', () => {
  window.location.href = 'cajita.html';
});

gift3.addEventListener('click', () => {
  window.location.href = 'album.html';
});
