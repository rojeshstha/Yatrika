   document.addEventListener("DOMContentLoaded", function () {
  loadGears();
  loadCart();
});

function showSection(type) {
  const buySection = document.getElementById("buy-section");
  const rentSection = document.getElementById("rent-section");

  if (type === "rent") {
    rentSection.classList.remove("d-none");
    buySection.classList.add("d-none");
  } else {
    buySection.classList.remove("d-none");
    rentSection.classList.add("d-none");
  }
}

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating
      ? `<i class="bi bi-star-fill" data-index="${i}"></i>`
      : `<i class="bi bi-star" data-index="${i}"></i>`;
  }
  return stars;
}

async function loadGears() {
  try {
    const res = await fetch("/api/gears");
    const gears = await res.json();

    const rentList = document.getElementById("rent-section").querySelector(".row");
    const buyList = document.getElementById("buy-section").querySelector(".row");

    rentList.innerHTML = "";
    buyList.innerHTML = "";

    gears.forEach((gear) => {
      const gearCard = getGearCard(gear);
      rentList.appendChild(gearCard.cloneNode(true));
      buyList.appendChild(gearCard);
    });
  } catch (err) {
    console.error("Error loading gears:", err);
  }
}

function getGearCard(gear) {
  const gearCard = document.createElement("div");
  gearCard.className = "col-md-4";
  gearCard.innerHTML = `
    <div class="card gear-card shadow-sm mb-4">
      <div class="card-img-wrapper position-relative">
        <img src="/public${gear.image_url || '/images/placeholder.jpg'}" class="card-img-top" alt="${gear.name}">
      </div>
      <div class="card-body">
        <small class="text-uppercase text-muted fw-bold">${gear.type === "buy" ? "GEAR BUY" : "GEAR RENTAL"}</small>
        <h5 class="card-title fw-semibold">${gear.name}</h5>
        <div class="d-flex align-items-center mb-2">
          <div class="star-rating text-warning me-1" data-rating="${gear.rating || 4}">
            ${generateStars(gear.rating || 4)}
          </div>
          <small class="text-muted ms-1">(${gear.review_count || 0} reviews)</small>
        </div>
        <div class="mb-2">
          ${gear.original_price ? `<span class="text-muted text-decoration-line-through">Rs. ${gear.original_price}</span>` : ""}
          <span class="text-danger fw-bold">Rs. ${gear.price}</span>
          ${gear.type === "rent" ? `<small class="text-muted">per day</small>` : ""}
        </div>
        <button class="btn btn-success w-100" onclick="addToCart(${gear.id})">
          <i class="bi bi-cart-plus me-1"></i> ${gear.type === "buy" ? "Buy Now" : "Add to Cart"}
        </button>
      </div>
    </div>
  `;
  return gearCard;
}

async function addToCart(gearId) {
  try {
    const response = await fetch(`/api/cart/add/${gearId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    alert(result.message);
    loadCart();
  } catch (err) {
    console.error("Error adding to cart:", err);
  }
}

async function loadCart() {
  try {
    const response = await fetch("/api/cart");
    const { cart } = await response.json();
    const cartList = document.getElementById("cart-list");
    if (!cartList) return;

    cartList.innerHTML = "";

    if (cart.length === 0) {
      cartList.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "col-md-4";
      cartItem.innerHTML = `
        <div class="card gear-card shadow-sm mb-4">
          <div class="card-img-wrapper position-relative">
            <img src="/public${gear.image_url || '/images/placeholder.jpg'}" class="card-img-top" alt="${gear.name}">

          </div>
          <div class="card-body">
            <h5 class="card-title fw-semibold">${item.name}</h5>
            <p class="text-danger fw-bold">Rs. ${item.price}</p>
            <button class="btn btn-danger w-100" onclick="removeFromCart(${item.gear_id})">
              <i class="bi bi-trash"></i> Remove
            </button>
          </div>
        </div>
      `;
      cartList.appendChild(cartItem);
    });
  } catch (error) {
    console.error("Failed to load cart:", error);
  }
}

async function removeFromCart(gearId) {
  try {
    const response = await fetch(`/api/cart/remove/${gearId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    alert(result.message);
    loadCart();
  } catch (err) {
    console.error("Error removing from cart:", err);
  }
}

async function checkoutCart() {
  try {
    const response = await fetch("/api/cart");
    const { cart } = await response.json();

    if (cart.length === 0) {
      alert("Your cart is empty. Add some gear first.");
      return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const confirmed = confirm(`Total price: Rs. ${totalPrice}\nDo you want to proceed to payment?`);

    if (!confirmed) return;

    const checkoutResponse = await fetch("/api/cart/checkout", { method: "POST" });
    const result = await checkoutResponse.json();

    alert(result.message || "Checkout successful!");
    loadCart();
  } catch (error) {
    console.error("Checkout failed:", error);
    alert("Checkout failed. Please try again.");
  }
}
