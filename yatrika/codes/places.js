window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav-section');
  const placeholder = document.getElementById('nav-placeholder');
  const contentBelow = document.querySelector('.content-below-navbar');

  const navHeight = nav.offsetHeight;
  const navTop = placeholder.offsetTop;

  if (window.pageYOffset >= navTop) {
    nav.classList.add('fixed');
    placeholder.classList.add('active');
    placeholder.style.height = navHeight + 'px';  // keep space when fixed
    contentBelow.classList.add('fixed-bg');
  } else {
    nav.classList.remove('fixed');
    placeholder.classList.remove('active');
    placeholder.style.height = '0';
    contentBelow.classList.remove('fixed-bg');
  }
});

// Optional: Initialize placeholder height on page load
window.addEventListener('load', () => {
  const placeholder = document.getElementById('nav-placeholder');
  placeholder.style.height = '0px';
});


const pricePerTraveler = 14000; // Example fixed price per traveler
const travelersInput = document.getElementById("travelers");
const totalDisplay = document.createElement("div");
totalDisplay.className = "mt-2 text-end fw-bold text-primary";
travelersInput.parentElement.parentElement.appendChild(totalDisplay);

// Function to update traveler count
function changeTravelerCount(delta) {
  let value = parseInt(travelersInput.value);
  value = isNaN(value) ? 1 : value + delta;
  if (value < 1) value = 1;
  travelersInput.value = value;
  updateTotal();
}

// Function to update total price
function updateTotal() {
  const count = parseInt(travelersInput.value) || 1;
  const total = count * pricePerTraveler;
  totalDisplay.innerText = `Total: Rs${total}`;
}
updateTotal(); // Initial call

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const origin = document.getElementById("origin").value.trim();
  const travelers = travelersInput.value;
  const fromDate = document.getElementById("fromDate").value;
  const nationality = document.getElementById("nationality").value;
  const message = document.getElementById("message").value.trim();

  if (!origin || !travelers || !fromDate || !nationality) {
    alert("Please fill in all required fields.");
    return;
  }

  // Show payment modal
  showPaymentModal();
});

// Inject payment modal into the page (can be added once on load)
function showPaymentModal() {
  const modalHTML = `
    <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form id="paymentForm">
            <div class="modal-header">
              <h5 class="modal-title" id="paymentModalLabel">Enter Payment Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="cardNumber" class="form-label">Card Number</label>
                <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required>
              </div>
              <div class="mb-3">
                <label for="cvv" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="cvv" placeholder="1234567890" required>
              </div>
              <div class="text-end fw-bold text-success">
                Pay: Rs${parseInt(travelersInput.value || 1) * pricePerTraveler}
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary w-100">Confirm Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const paymentModal = new bootstrap.Modal(document.getElementById("paymentModal"));
  paymentModal.show();

  // Payment form submission
  document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!cardNumber || !cvv) {
      alert("Please enter all payment details.");
      return;
    }

    paymentModal.hide();
    setTimeout(() => {
      alert("✅ Booking confirmed and payment successful!");
    }, 500);
  });
}


