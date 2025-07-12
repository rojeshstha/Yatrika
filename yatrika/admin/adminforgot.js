function handleForgotPassword(event) {
  event.preventDefault();
  const username = document.getElementById('forgot-username').value;
  const newPassword = document.getElementById('forgot-password').value;
  const storedUser = JSON.parse(localStorage.getItem('adminUser'));
  if (storedUser && storedUser.username && username === storedUser.username) {
    storedUser.password = newPassword;
    localStorage.setItem('adminUser', JSON.stringify(storedUser));
    alert('Password changed successfully! Please login.');
    window.location.href = 'adminlogin.html';
    return false;
  } else {
    alert('Username not found.');
    return false;
  }
} 