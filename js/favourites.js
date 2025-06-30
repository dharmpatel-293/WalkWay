const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
const wrap = document.getElementById("favourites-list");

if (favourites.length === 0) {
  wrap.innerHTML = `
    <div class="w-100 text-center py-5">
      <p style="font-size:1.3rem" class="text-muted">
        No favourites added yet.
      </p>
    </div>`;
} else {
  favourites.forEach(product => {
    // create column
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

    // card HTML **with heart icon**
    col.innerHTML = `
      <div class="card fav-card">
        <button class="remove-fav-btn">
          <i class="bi bi-heart-fill"></i>
        </button>

        <img src="${product.image}" class="card-img-top">
       <div class="card-body">
        <h6>${product.name}</h6>
        <p class="text-muted small">${product.category}</p>
        <p class="fw-semibold mb-3">MRP : ₹ ${product.price.toLocaleString()}</p>
        <button class="btn btn-outline-dark w-100 add-bag-btn">
          Add to Bag
        </button>
        </div>
      </div>
    `;

    /* add-to-bag click */
    col.querySelector(".add-bag-btn").onclick = () => {
    let bag = JSON.parse(localStorage.getItem("bag")) || [];
    const exists = bag.find(i => i.id === product.id);
    if (exists) exists.qty += 1;
    else bag.push({ ...product, size: "default", qty: 1 });
    localStorage.setItem("bag", JSON.stringify(bag));
    col.querySelector(".add-bag-btn").textContent = "✔ Added";
    };



    // append to grid
    wrap.appendChild(col);

    /* ---- click handler: remove from favourites ---- */
    col.querySelector(".remove-fav-btn").addEventListener("click", () => {
      // 1. remove from DOM immediately
      col.remove();

      // 2. remove from localStorage
      const newFavs = favourites.filter(p => p.id !== product.id);
      localStorage.setItem("favourites", JSON.stringify(newFavs));

      // 3. if list is now empty, show the “no favourites” message
      if (newFavs.length === 0) {
        wrap.innerHTML = `
          <div class="w-100 text-center py-5">
            <p style="font-size:1.3rem" class="text-muted">
              No favourites added yet.
            </p>
          </div>`;
      }
    });
  });
}

