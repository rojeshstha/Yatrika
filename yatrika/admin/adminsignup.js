function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const profilePic = document.getElementById('signup-profile-pic-preview').src;
  const adminUser = { username, email, password, profilePic };
  localStorage.setItem('adminUser', JSON.stringify(adminUser));
  alert('Signup successful! Please login.');
  window.location.href = 'adminlogin.html';
  return false;
} 