let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down → fade out
    navbar.classList.add('hidden');
  } else {
    // Scrolling up → fade in
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const carousel = document.getElementById('icon-carousel');

function scrollLeft() {
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: 'smooth'
  });
}

function scrollRight() {
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: 'smooth'
  });
}

// dropdown menu

document.querySelectorAll('.sort-option').forEach(option => {
  option.addEventListener('click', function (e) {
    e.preventDefault();

    const sortType = this.getAttribute('data-sort');
    const container = document.querySelector('.row.g-4');
    const cards = Array.from(container.querySelectorAll('.product-card'));

    if (sortType === 'high-to-low') {
      cards.sort((a, b) => b.dataset.price - a.dataset.price);
    } else if (sortType === 'low-to-high') {
      cards.sort((a, b) => a.dataset.price - b.dataset.price);
    }

    // Move sorted cards into the container
    cards.forEach(card => container.appendChild(card));
  });
});

// document.querySelectorAll('.sort-option').forEach(o => o.classList.remove('active'));
// this.classList.add('active');

// ---> AUTOCOMPLETE SEARCH <------------------------------------------------
(() => {
  const input = document.getElementById("global-search");
  const box   = document.getElementById("search-suggestions");
  if (!input || !box) return;   // header not present?  quit.

  const MAX = 5;                // show at most five suggestions

  /* helper: build the list */
  function showMatches(q) {
    const re = new RegExp(q, "i");
    const hits = window.productsIndex
      .filter(p => re.test(p.name))
      .slice(0, MAX);

    if (hits.length === 0) { box.classList.add("d-none"); return; }

    box.innerHTML = hits.map(p =>
      `<li class="list-group-item" data-id="${p.id}">${p.name}</li>`
    ).join("");
    box.classList.remove("d-none");
  }

  /* search as you type */
  input.addEventListener("keyup", e => {
    const q = input.value.trim();
    if (q.length === 0) { box.classList.add("d-none"); return; }

    // ENTER key on first item
    if (e.key === "Enter") {
      const first = box.querySelector("li");
      if (first) window.location = `product.html?id=${first.dataset.id}`;
      return;
    }
    showMatches(q);
  });

  /* click: go to product page */
  box.addEventListener("click", e => {
    const li = e.target.closest("li[data-id]");
    if (!li) return;
    window.location = `product.html?id=${li.dataset.id}`;
  });

  /* hide suggestions on outside click */
  document.addEventListener("click", e => {
    if (!e.target.closest("#global-search") &&
        !e.target.closest("#search-suggestions")) {
      box.classList.add("d-none");
    }
  });
})();

