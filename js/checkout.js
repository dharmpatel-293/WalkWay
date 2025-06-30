/* ========= CONFIG ========= */
const SHIPPING_COST = 1250;          // flat INR
const PROMO_CODE = "SAVE10";         // 10% off demo code

/* ========= UTIL ========= */
const formatCurrency = n => `₹ ${n.toLocaleString()}`;

/* ========= Get Bag Data ========= */
let bag = [];
try {
  bag = JSON.parse(localStorage.getItem("bag")) || [];
} catch (e) {
  console.error("Error parsing bag data from localStorage:", e);
  bag = [];
}

/* ========= Build Summary ========= */
const subEl  = document.getElementById("sum-subtotal");
const shipEl = document.getElementById("sum-shipping");
const totEl  = document.getElementById("sum-total");
const itemsWrap = document.getElementById("sum-items");
const arrivalEl = document.getElementById("sum-arrival");

function calcSubtotal() {
  return bag.reduce((acc, item) => acc + item.price * item.qty, 0);
}

function renderSummary() {

  // Build item thumbnails
  itemsWrap.innerHTML = "";
  bag.forEach(item => {
    // Validate required properties before rendering
    if (!item.image || !item.name || !item.qty || !item.size || !item.price) {
      console.warn("Invalid item data in bag, skipping item:", item);
      return;
    }
    itemsWrap.insertAdjacentHTML("beforeend", `
      <div class="d-flex align-items-start gap-2 mb-3">
        <img src="${item.image}" width="60" height="60" style="object-fit:cover" class="rounded border">
        <div class="small">
          <div>${item.name}</div>
          <div class="text-muted">Qty ${item.qty} • Size ${item.size}</div>
          <div>${formatCurrency(item.price)}</div>
        </div>
      </div>
    `);
  });

  // Costs
  const subtotal = calcSubtotal();
  const shipping = SHIPPING_COST;
  const total    = subtotal + shipping;

  subEl.textContent  = formatCurrency(subtotal);
  shipEl.textContent = formatCurrency(shipping);
  totEl.textContent  = formatCurrency(total);

  // Fake arrival date (3‑6 days from now)
  const now = new Date();
  const start = new Date(now); start.setDate(now.getDate() + 3);
  const end   = new Date(now); end.setDate(now.getDate() + 6);
  const opt   = { day: "numeric", month: "short" };
  arrivalEl.textContent =
    `Arrives ${start.toLocaleDateString("en-IN", opt)} - ` +
    `${end.toLocaleDateString("en-IN", opt)}`;
}

renderSummary();

/* ========= Promo Code ========= */
let promoApplied = false;
document.getElementById("applyPromo").onclick = () => {
  const promoInput = document.getElementById("promoCode");
  const code = promoInput.value.trim().toUpperCase();

  if (promoApplied) {
    console.log("Promo code already applied.");
    promoInput.value = "";
    return;
  }

  if (code === PROMO_CODE) {
    promoApplied = true;

    // 10% discount on subtotal
    const subtotal = calcSubtotal();
    const discounted = subtotal * 0.9;
    subEl.textContent = formatCurrency(discounted);

    const total = discounted + SHIPPING_COST;
    totEl.textContent = formatCurrency(total);

    // Provide better feedback than alert
    console.log("Promo applied! 10% off subtotal.");
    promoInput.value = "";
  } else {
    console.log("Invalid promo code.");
    promoInput.value = "";
  }
};

/* ========= Form Validation & Place Order ========= */
const form = document.getElementById("checkout-form");
const placeBtn = document.getElementById("placeOrderBtn");

form.addEventListener("input", () => {
  placeBtn.disabled = !form.checkValidity();
});

form.addEventListener("submit", e => {
  e.preventDefault();

  // Show the success box
  const box = document.getElementById("orderSuccess");
  if (box) {
    box.classList.remove("d-none");
  }

  // Clear bag data
  localStorage.removeItem("bag");

  // Redirect after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});
