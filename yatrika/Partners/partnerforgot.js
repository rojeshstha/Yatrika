// Partner Forgot Password Logic for new layout
const forgotForm = document.getElementById('partnerForgotForm');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');

if (forgotForm) {
  forgotForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMsg.textContent = '';
    successMsg.textContent = '';
    const username = document.getElementById('forgot-username').value.trim();
    const newPassword = document.getElementById('forgot-password').value;
    let partnerUser = JSON.parse(localStorage.getItem('partnerUser'));
    if (!partnerUser || partnerUser.username !== username) {
      errorMsg.textContent = 'Username not found.';
      return;
    }
    // Update password
    partnerUser.password = newPassword;
    localStorage.setItem('partnerUser', JSON.stringify(partnerUser));
    successMsg.textContent = 'Password reset successful! You can now login.';
    // Optionally, redirect after a short delay
    setTimeout(() => {
      window.location.href = 'partnerlogin.html';
    }, 1500);
  });
}

function handlePartnerForgotPassword(event) {
  event.preventDefault();
  const username = document.getElementById('forgot-username').value;
  const newPassword = document.getElementById('forgot-password').value;
  const storedUser = JSON.parse(localStorage.getItem('partnerUser'));
  if (storedUser && storedUser.username && username === storedUser.username) {
    storedUser.password = newPassword;
    localStorage.setItem('partnerUser', JSON.stringify(storedUser));
    alert('Password changed successfully! Please login.');
    window.location.href = 'partnerlogin.html';
    return false;
  } else {
    alert('Username not found.');
    return false;
  }
}
