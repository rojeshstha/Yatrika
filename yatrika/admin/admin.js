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

    function renderUsers() {
      const usersList = document.getElementById('usersList');
  if (!usersList) return;
      usersList.innerHTML = '';
  // Get main user
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    usersList.innerHTML += `
      <div class="col-md-4">
          <div class="card">
          <div class="card-body text-center">
            <img src="${user.profilePic || 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}" alt="User Photo" style="width:60px;height:60px;object-fit:cover;border-radius:50%;margin-bottom:10px;">
              <h5 class="card-title">${user.username}</h5>
              <p class="card-text"><strong>Email:</strong> ${user.email}</p>
            <p class="card-text"><strong>Type:</strong> User</p>
          </div>
        </div>
      </div>
    `;
  }
  // Get partner user
  const partnerUser = JSON.parse(localStorage.getItem('partnerUser'));
  if (partnerUser) {
    usersList.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <img src="${partnerUser.profilePic || 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}" alt="Partner Photo" style="width:60px;height:60px;object-fit:cover;border-radius:50%;margin-bottom:10px;">
            <h5 class="card-title">${partnerUser.username}</h5>
            <p class="card-text"><strong>Email:</strong> ${partnerUser.email}</p>
            <p class="card-text"><strong>Type:</strong> Partner</p>
          </div>
        </div>
      </div>
    `;
  }
  // Get all providers (from partner modal)
  const providers = JSON.parse(localStorage.getItem('providers')) || [];
  providers.forEach((p) => {
    usersList.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <img src="${p.photo || 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}" alt="Provider Photo" style="width:60px;height:60px;object-fit:cover;border-radius:50%;margin-bottom:10px;">
            <h5 class="card-title">${p.companyName || p.username || 'Provider'}</h5>
            <p class="card-text"><strong>Owner:</strong> ${p.ownerName || ''}</p>
            <p class="card-text"><strong>Contact:</strong> ${p.contact || p.phone || ''}</p>
            <p class="card-text"><strong>PAN:</strong> ${p.pan || ''}</p>
            <p class="card-text"><strong>Type:</strong> Partner</p>
          </div>
            </div>
          </div>
        `;
  });
}

document.addEventListener('DOMContentLoaded', function () {
    renderUsers();
  renderProviders();
});

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
      // Only clear session storage, not localStorage (so admin credentials remain)
      sessionStorage.clear();
      // Redirect to admin login page
      window.location.href = 'adminlogin.html';
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
  

