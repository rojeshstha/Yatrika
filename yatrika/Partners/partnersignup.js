// Partner Signup Logic for new layout
const signupForm = document.getElementById('partnerSignupForm');
const errorMsg = document.getElementById('errorMsg');
const profilePicInput = document.getElementById('signup-profile-pic');
const profilePicPreview = document.getElementById('signup-profile-pic-preview');

// Preview profile picture
if (profilePicInput) {
  profilePicInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        profilePicPreview.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      profilePicPreview.src = 'https://cdn-icons-png.flaticon.com/512/147/147144.png';
    }
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMsg.textContent = '';
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    let profilePic = profilePicPreview.src;

    // Check if already signed up (by username)
    const existing = JSON.parse(localStorage.getItem('partnerUser'));
    if (existing && existing.username === username) {
      errorMsg.textContent = 'Username already exists. Please login or use another username.';
      return;
    }

    // Save partner user to localStorage
    const partnerUser = {
      username,
      email,
      password,
      profilePic
    };
    localStorage.setItem('partnerUser', JSON.stringify(partnerUser));
    // Redirect to login page
    window.location.href = 'partnerlogin.html';
  });
}

// Update left-panel image in partnerlogin.html if profilePic exists
if (window.location.pathname.endsWith('partnerlogin.html')) {
  window.onload = function() {
    const partnerUser = JSON.parse(localStorage.getItem('partnerUser'));
    if (partnerUser && partnerUser.profilePic) {
      const logoImg = document.getElementById('adminLoginLogo');
      if (logoImg) logoImg.src = partnerUser.profilePic;
    }
  };
}

function handlePartnerSignup(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const profilePic = document.getElementById('signup-profile-pic-preview').src;
  const partnerUser = { username, email, password, profilePic };
  localStorage.setItem('partnerUser', JSON.stringify(partnerUser));
  alert('Signup successful! Please login.');
  window.location.href = 'partnerlogin.html';
  return false;
}

// Pre-fill email if stored in localStorage
window.addEventListener('DOMContentLoaded', function() {
  const storedUser = JSON.parse(localStorage.getItem('partnerUser'));
  if (storedUser && storedUser.email) {
    const emailInput = document.getElementById('signup-email');
    if (emailInput) emailInput.value = storedUser.email;
  }
});
