const modal = document.getElementById('partnerModal');
const openBtn = document.getElementById('openPartnerModal');
const closeBtn = document.querySelector('.close-btn');
const partnerForm = document.getElementById('partnerForm');

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

partnerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputs = partnerForm.querySelectorAll('input');
  const companyName = inputs[0].value;
  const ownerName = inputs[1].value;
  const contact = inputs[2].value;
  const pan = inputs[3].value;
  const photoInput = inputs[4];
  const reader = new FileReader();
  reader.onload = function() {
    const photo = reader.result;
    // Get existing providers or empty array
    const providers = JSON.parse(localStorage.getItem('providers')) || [];
    providers.push({ companyName, ownerName, contact, pan, photo });
    localStorage.setItem('providers', JSON.stringify(providers));
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    partnerForm.reset();
    alert('Partner info submitted!');
  };
  if (photoInput.files[0]) {
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    // No photo, just save without photo
    const providers = JSON.parse(localStorage.getItem('providers')) || [];
    providers.push({ companyName, ownerName, contact, pan, photo: '' });
    localStorage.setItem('providers', JSON.stringify(providers));
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    partnerForm.reset();
    alert('Partner info submitted!');
  }
});
