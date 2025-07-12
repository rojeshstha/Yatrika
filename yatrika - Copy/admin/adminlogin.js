    function handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const storedUser = JSON.parse(localStorage.getItem('adminUser'));
      if (storedUser && username === storedUser.username && password === storedUser.password) {
        // Redirect to admin.html after successful login
        window.location.href = 'admin.html';
        return true;
      } else {
        alert('Invalid username or password.');
        return false;
      }
    }
  