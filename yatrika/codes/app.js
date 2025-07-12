const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

// Dynamic Signup
const signupForm = document.querySelector('.sign-up-form');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = signupForm.querySelector('input[placeholder="Username"]').value;
  const email = signupForm.querySelector('input[placeholder="Email"]').value;
  const password = signupForm.querySelector('input[placeholder="Password"]').value;
  const profilePic = document.getElementById('signup-profile-pic-preview').src;
  const user = { username, email, password, profilePic };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Signup successful! You can now log in.');
  container.classList.remove("sign-up-mode");
});

// Dynamic Login
const loginForm = document.querySelector('.sign-in-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = loginForm.querySelector('input[placeholder="Username"]').value;
  const password = loginForm.querySelector('input[placeholder="Password"]').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && username === storedUser.username && password === storedUser.password) {
    alert('Login successful!');
    // Redirect to post-login page if set
    const redirect = localStorage.getItem('postLoginRedirect');
    if (redirect) {
      localStorage.removeItem('postLoginRedirect');
      window.location.href = redirect;
    } else {
      window.location.href = 'index.html';
    }
  } else {
    alert('Invalid username or password.');
  }
});