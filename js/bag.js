/* ---- read bag from localStorage --------------------------------------- */
let bag = JSON.parse(localStorage.getItem("bag")) || [];

/* ---- helpers ----------------------------------------------------------- */
function saveBag() { localStorage.setItem("bag", JSON.stringify(bag)); }
function format(n)  { return `₹ ${n.toLocaleString()}`; }

/* ---- render bag -------------------------------------------------------- */
const list   = document.getElementById("bag-items");
const subEl  = document.getElementById("bag-subtotal");
const totEl  = document.getElementById("bag-total");
const SHIP   = 1250;                                            // flat shipping

function renderBag() {
  list.innerHTML = "";

  if (bag.length === 0) {
    list.innerHTML = `<p class="text-center text-muted py-5 fs-5">
                        Your bag is empty.</p>`;
    subEl.textContent = totEl.textContent = format(0);
    return;
  }

  let subtotal = 0;

  bag.forEach((item, idx) => {
    subtotal += item.price * item.qty;

    const row = document.createElement("div");
    row.className = "d-flex gap-3 mb-4 align-items-start";

    row.innerHTML = `
      <img src="${item.image}" width="120" class="border rounded">
      <div class="flex-grow-1">
        <h6 class="mb-1">${item.name}</h6>
        <p class="text-muted small mb-1">${item.category}</p>
        <p class="text-muted small mb-2">Size ${item.size ?? "—"}</p>

        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-danger del-btn">
            <i class="bi bi-trash"></i>
          </button>

          <div class="btn-group" role="group">
            <button class="btn btn-sm btn-outline-secondary dec-btn">−</button>
            <button class="btn btn-sm btn-light disabled">${item.qty}</button>
            <button class="btn btn-sm btn-outline-secondary inc-btn">+</button>
          </div>

          <span class="ms-auto fw-semibold">${format(item.price)}</span>
        </div>
      </div>
    `;
    list.appendChild(row);

    /* remove */
    row.querySelector(".del-btn").onclick = () => {
      bag.splice(idx, 1);
      saveBag();
      renderBag();
    };

    /* qty − */
    row.querySelector(".dec-btn").onclick = () => {
      if (item.qty > 1) { item.qty--; saveBag(); renderBag(); }
    };

    /* qty + */
    row.querySelector(".inc-btn").onclick = () => {
      item.qty++; saveBag(); renderBag();
    };
  });

  subEl.textContent = format(subtotal);
  totEl.textContent = format(subtotal + SHIP);
}

renderBag();
