function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const storedUser = JSON.parse(localStorage.getItem('partnerUser'));
  if (storedUser && storedUser.username && storedUser.password && username === storedUser.username && password === storedUser.password) {
    // Redirect to partner.html after successful login
    window.location.href = 'partner.html';
    return true;
  } else {
    alert('Invalid username or password.');
    return false;
  }
}

window.onload = function() {
  const partnerUser = JSON.parse(localStorage.getItem('partnerUser'));
  if (partnerUser && partnerUser.profilePic) {
    const logoImg = document.getElementById('adminLoginLogo');
    if (logoImg) logoImg.src = partnerUser.profilePic;
  }
};
