const modal = document.getElementById('partnerModal');
const openBtn = document.getElementById('openPartnerModal');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scroll
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scroll
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
