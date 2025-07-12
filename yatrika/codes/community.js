// Profile dropdown logic
function getInitials(name) {
  if (!name) return 'U';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
}
function setProfileDropdown() {
  const user = JSON.parse(localStorage.getItem('user'));
  const avatarImg = document.getElementById('profile-avatar-img');
  const avatarInitials = document.getElementById('profile-avatar-initials');
  const dropdownImg = document.getElementById('dropdown-avatar-img');
  const dropdownInitials = document.getElementById('dropdown-avatar-initials');
  if (user && user.profilePic && user.profilePic.startsWith('data:')) {
    avatarImg.src = user.profilePic;
    avatarImg.style.display = 'block';
    avatarInitials.style.display = 'none';
    dropdownImg.src = user.profilePic;
    dropdownImg.style.display = 'block';
    dropdownInitials.style.display = 'none';
  } else if (user && user.username) {
    avatarImg.style.display = 'none';
    avatarInitials.textContent = getInitials(user.username);
    avatarInitials.style.display = 'block';
    dropdownImg.style.display = 'none';
    dropdownInitials.textContent = getInitials(user.username);
    dropdownInitials.style.display = 'block';
  }
  document.getElementById('dropdown-username').textContent = user?.username || 'Username';
  document.getElementById('dropdown-email').textContent = user?.email || 'user@email.com';
}
setProfileDropdown();
document.getElementById('profile-avatar').onclick = function() {
  const dd = document.getElementById('profile-dropdown');
  dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
};
document.addEventListener('click', function(e) {
  if (!e.target.closest('.Profile')) {
    document.getElementById('profile-dropdown').style.display = 'none';
  }
});
document.getElementById('signout-btn').onclick = function() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
};