function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
      const output = document.getElementById('profilePic');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  const sidebarLinks = document.querySelectorAll('#sidebarMenu .nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Update active link
      sidebarLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Hide all sections
      contentSections.forEach(section => section.classList.add('d-none'));

      // Show selected section
      const targetId = this.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('d-none');
      }
    });
  });
    let users = [
      { id: 1, username: 'roj', email: 'roj@example.com', contact: '9800000000' },
      { id: 2, username: 'maya', email: 'maya@example.com', contact: '9811111111' },
      { id: 3, username: 'sita', email: 'sita@example.com', contact: '9822222222' }
    ];

    function renderUsers() {
      const usersList = document.getElementById('usersList');
      usersList.innerHTML = '';

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'col-md-4';

        userCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.username}</h5>
              <p class="card-text"><strong>Email:</strong> ${user.email}</p>
              <p class="card-text"><strong>Contact:</strong> ${user.contact}</p>
              <button class="btn btn-danger btn-sm delete-btn" data-id="${user.id}">Delete</button>
            </div>
          </div>
        `;

        usersList.appendChild(userCard);
      });

      // Attach delete event listeners
      document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'));
          users = users.filter(u => u.id !== id);
          renderUsers();
        });
      });
    }
    // Initial render
    renderUsers();

    // providers
     const providers = [
    {
      id: 1,
      photo: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      username: "provider1",
      firstName: "John",
      lastName: "Doe",
      email: "provider1@example.com",
      phone: "9800000001",
      type: "Partner",
      panImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pan_Card_sample.svg/800px-Pan_Card_sample.svg.png"
    }
    // Add more provider objects if needed
  ];

  function renderProviders() {
    const table = document.getElementById("providerTable");
    table.innerHTML = "";
    providers.forEach((p, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.id}</td>
        <td><img src="${p.photo}" class="provider-photo" alt="Photo"></td>
        <td>${p.username}</td>
        <td>
          First Name: <strong>${p.firstName}</strong><br>
          Last Name: <strong>${p.lastName}</strong>
        </td>
        <td>${p.email}</td>
        <td>${p.phone}</td>
        <td>${p.type}</td>
        <td><img src="${p.panImage}" class="pan-image" alt="PAN"></td>
        <td>
          <button class="btn btn-success btn-sm" onclick="acceptProvider(${index})">Accept</button>
          <button class="btn btn-danger btn-sm mt-1" onclick="rejectProvider(${index})">Reject</button>
        </td>
      `;
      table.appendChild(row);
    });
  }

  function acceptProvider(index) {
    alert(`Provider ${providers[index].username} accepted as a partner.`);
    // Optional: remove from list or change status
  }

  function rejectProvider(index) {
    alert(`Provider ${providers[index].username} has been rejected.`);
    // Optional: remove from list or change status
  }

  // Initial render
  renderProviders();

// review
document.addEventListener('DOMContentLoaded', function () {
  // Sample static reviews - replace this with fetch from server later
  const reviews = [
    { id: 1, user: 'Rojesh', review: 'Amazing trek! Loved the guides and views.', date: '2025-06-01' },
    { id: 2, user: 'Maya', review: 'The travel package was very affordable and well-organized.', date: '2025-06-10' },
    { id: 3, user: 'Sita', review: 'Excellent gear rental service. Highly recommended!', date: '2025-06-15' }
  ];

  function renderReviews() {
    const reviewList = document.getElementById('reviewList');
    if (!reviewList) return;

    reviewList.innerHTML = '';

    reviews.forEach(r => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'col-md-6';

      reviewCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${r.user}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${r.date}</h6>
            <p class="card-text">${r.review}</p>
          </div>
        </div>
      `;

      reviewList.appendChild(reviewCard);
    });
  }

  renderReviews();
});


//   logout 
document.addEventListener('DOMContentLoaded', function () {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      // Optional: Clear local storage or session data
      localStorage.clear();
      sessionStorage.clear();

      // Redirect to login page
      window.location.href = 'login.html'; // Change this to your actual login page
    });
  }
});

// trek offerd section
      const trekData = [
        { title: 'Everest Base Camp', image: '../images/Everest.jpg', agency: 'Himalayan Treks', sold: 212 },
        { title: 'Manaslu Himal Trek', image: '../images/manaslu.jpeg', agency: 'Adventure Nepal', sold: 167 },
        { title: 'Langtang Valley', image: '../images/langtang.jpg', agency: 'Nepal Spirit', sold: 93 }
      ];

      const trekCardsContainer = document.getElementById('trekCardsContainer');

      const packageData = [
        { title: 'Kathmandu Tour', image: 'https://via.placeholder.com/300x200', agency: 'Explore Nepal', sold: 120 },
        { title: 'Pokhara Getaway', image: 'https://via.placeholder.com/300x200', agency: 'Travel Hub', sold: 85 },
        { title: 'Chitwan Safari', image: 'https://via.placeholder.com/300x200', agency: 'Jungle Trekkers', sold: 60 }
      ];
      const activityData = [
        { title: 'Paragliding', image: 'https://via.placeholder.com/300x200', agency: 'Sky Riders', sold: 45 },
        { title: 'Bungee Jumping', image: 'https://via.placeholder.com/300x200', agency: 'Adrenaline Nepal', sold: 78 },
        { title: 'Zip Line', image: 'https://via.placeholder.com/300x200', agency: 'Thrill Zone', sold: 33 }
      ];

      function populateCards(dataArray, containerId) {
        const container = document.getElementById(containerId);
        dataArray.forEach(item => {
          const col = document.createElement('div');
          col.className = 'col-md-4 mb-4';
          col.innerHTML = `
            <div class="card h-100">
              <img src="${item.image}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text mb-1">Agency: <strong>${item.agency}</strong></p>
                <p class="card-text text-success">Packages Sold: <span class="sold-count">${item.sold}</span></p>
              </div>
            </div>`;
          container.appendChild(col);
        });
      }

      populateCards(trekData, 'trekCardsContainer');
      populateCards(packageData, 'packageCardsContainer');
      populateCards(activityData, 'activityCardsContainer');
  

