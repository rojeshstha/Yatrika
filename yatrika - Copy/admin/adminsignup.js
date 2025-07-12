function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const adminUser = { username, email, password };
  localStorage.setItem('adminUser', JSON.stringify(adminUser));
  alert('Signup successful! Please login.');
  window.location.href = 'adminlogin.html';
  return false;
} 