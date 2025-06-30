
// Product page

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const products = {
  // 1
  "nike-field-general": {
    name: "Nike Field General",
    price: 9695,
    images: [
      "images/field/field1.jpg",
      "images/field/field2.jpg",
      "images/field/field3.jpg",
      "images/field/field4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },

  // 2
  "Nike-Air-Max-Dn": {
    name: "Nike Air Max Dn",
    price: 13995,
    images: [
      "images/dn/dn1.jpg",
      "images/dn/dn2.jpg",
      "images/dn/dn3.jpg",
      "images/dn/dn4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },

  // 3
   "Nike-Air-Max-Dn2": {
    name: "Nike Air Max Dn",
    price: 13995,
    images: [
      "images/dn/dn5.jpg",
      "images/dn/dn6.jpg",
      "images/dn/dn7.jpg",
      "images/dn/dn8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },

  // 4
  "Nike-Air-Max-Excee": {
    name: "Nike Air Max Excee",
    price: 7995,
    images: [
      "images/excee/ex1.jpg",
      "images/excee/ex2.jpg",
      "images/excee/ex3.jpg",
      "images/excee/ex4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },

  // 5
  "Nike-Air-Max-90": {
    name: "Nike Air Max 90",
    price: 10795,
    images: [
      "images/max 90/max1.jpg",
      "images/max 90/max2.jpg",
      "images/max 90/max3.jpg",
      "images/max 90/max4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 6
  "Nike-Air-Max-90-2": {
    name: "Nike Air Max 90",
    price: 10795,
    images: [
      "images/max 90/max5.jpg",
      "images/max 90/max6.jpg",
      "images/max 90/max7.jpg",
      "images/max 90/max8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 7
  "Nike-Zoom-Vomero-5": {
    name: "Nike Zoom Vomero 5",
    price: 14995,
    images: [
      "images/vomero 5/vm1.jpg",
      "images/vomero 5/vm2.jpg",
      "images/vomero 5/vm3.jpg",
      "images/vomero 5/vm4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 8
  "Nike-Zoom-Vomero-5-2": {
    name: "Nike Zoom Vomero 5",
    price: 7995,
    images: [
      "images/vomero 5/vm5.jpg",
      "images/vomero 5/vm6.jpg",
      "images/vomero 5/vm7.jpg",
      "images/vomero 5/vm8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 9
  "Air-Jordan-1-Low": {
    name: "Air Jordan 1 Low",
    price: 8995,
    images: [
      "images/jordan/jd1.jpg",
      "images/jordan/jd2.jpg",
      "images/jordan/jd3.jpg",
      "images/jordan/jd4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 10
  "Air-Jordan-1-Low-2": {
    name: "Air Jordan 1 Low",
    price: 8995,
    images: [
      "images/jordan/jd5.jpg",
      "images/jordan/jd6.jpg",
      "images/jordan/jd7.jpg",
      "images/jordan/jd8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },

  // 11
  "Nike-Pegasus-41": {
    name: "Nike Pegasus 41",
    price: 11895,
    images: [
      "images/pegasus 41/pg1.jpg",
      "images/pegasus 41/pg2.jpg",
      "images/pegasus 41/pg3.jpg",
      "images/pegasus 41/pg4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 12
  "Nike-Motiva": {
    name: "Nike Motiva  ",
    price: 9695,
    images: [
      "images/motiva/mt1.jpg",
      "images/motiva/mt2.jpg",
      "images/motiva/mt3.jpg",
      "images/motiva/mt4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 13
  "Nike-Vomero-18": {
    name: "Nike Vomero 18",
    price: 13295,
    images: [
      "images/vomero 18/vo1.jpg",
      "images/vomero 18/vo2.jpg",
      "images/vomero 18/vo3.jpg",
      "images/vomero 18/vo4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 14
  "Nike-V2K-Run": {
    name: "Nike V2k Run",
    price: 10795,
    images: [
      "images/v2k/vk1.jpg",
      "images/v2k/vk2.jpg",
      "images/v2k/vk3.jpg",
      "images/v2k/vk4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 15
  "Nike-Pegasus-41-2": {
    name: "Nike Pegasus 41",
    price: 7695,
    images: [
      "images/pegasus 41/pg5.jpg",
      "images/pegasus 41/pg6.jpg",
      "images/pegasus 41/pg7.jpg",
      "images/pegasus 41/pg8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


  // 16
  "Nike-Free-Metacon-6": {
    name: "Nike Free Metacon 6",
    price: 10795,
    images: [
      "images/metcon/mtc1.jpg",
      "images/metcon/mtc2.jpg",
      "images/metcon/mtc3.jpg",
      "images/metcon/mtc4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"Men's Shoes"
  },


   // WOMEN 1
  "Nike-Structure-26": {
    name: "Nike Structure 26",
    price: 11895,
    images: [
      "images/structure 26/st1.jpg",
      "images/structure 26/st2.jpg",
      "images/structure 26/st3.jpg",
      "images/structure 26/st4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },

  // 2
  "Nike-Structure-26-2": {
    name: "Nike Structure 26",
    price: 11895,
    images: [
      "images/structure 26/st5.jpg",
      "images/structure 26/st6.jpg",
      "images/structure 26/st7.jpg",
      "images/structure 26/st8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },

  // 3
  "Air-Jordan-4-RM": {
    name: "Air Jordan 4 RM",
    price: 7495,
    images: [
      "images/jordan 4/rm1.jpg",
      "images/jordan 4/rm2.jpg",
      "images/jordan 4/rm3.jpg",
      "images/jordan 4/rm4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },


  // 4
  "Nike-Court-Legacy-Lift": {
    name: "Nike Court Legacy Lift",
    price: 7495,
    images: [
      "images/legacy/lg1.jpg",
      "images/legacy/lg2.jpg",
      "images/legacy/lg3.jpg",
      "images/legacy/lg4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },


  // 5
  "NikeCourt-Lite-4": {
    name: "NikeCourt Lite 4",
    price: 6295,
    images: [
      "images/lite/lt1.jpg",
      "images/lite/lt2.jpg",
      "images/lite/lt3.jpg",
      "images/lite/lt4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },


  // 6
  "Nike-Vapor-Lite-3": {
    name: "Nike Vapor Lite 3",
    price: 7095,
    images: [
      "images/vapor/vp1.jpg",
      "images/vapor/vp2.jpg",
      "images/vapor/vp3.jpg",
      "images/vapor/vp4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },

  // 7
  "Jordan-CMFT-Era": {
    name: "Jordan CMFT Era",
    price: 10795,
    images: [
      "images/cmft/cm1.jpg",
      "images/cmft/cm2.jpg",
      "images/cmft/cm3.jpg",
      "images/cmft/cm4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },


  // 8
  "Nike-Terra-Manta": {
    name: "Nike Terra Manta",
    price: 7495,
    images: [
      "images/terra/tr1.jpg",
      "images/terra/tr2.jpg",
      "images/terra/tr3.jpg",
      "images/terra/tr4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Women's Shoes"
  },

  // Kids 1
  "Nike-Air-Max-Dn8": {
    name: "Nike Air Max Dn8",
    price: 13495,
    images: [
      "images/dn8/dn1.jpg",
      "images/dn8/dn2.jpg",
      "images/dn8/dn3.jpg",
      "images/dn8/dn4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },


   // 2
  "Nike-C1TY-'Street'": {
    name: "Nike C1TY 'Street'",
    price: 6895,
    images: [
      "images/street/st1.jpg",
      "images/street/st2.jpg",
      "images/street/st3.jpg",
      "images/street/st4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },


  // 3
  "Nike-Sonic-Fly": {
    name: "Nike Sonic Fly",
    price: 5595,
    images: [
      "images/sonic/sn1.jpg",
      "images/sonic/sn2.jpg",
      "images/sonic/sn3.jpg",
      "images/sonic/sn4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },


  // 4
  "Jordan-Spizike-Low": {
    name: "Jordan-Spizike-Low",
    price: 9295,
    images: [
      "images/spizike/sp1.jpg",
      "images/spizike/sp2.jpg",
      "images/spizike/sp3.jpg",
      "images/spizike/sp4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },

  // 5
  "Nike-C1TY": {
    name: "Nike C1TY",
    price: 6895,
    images: [
      "images/city/ct1.jpg",
      "images/city/ct2.jpg",
      "images/city/ct3.jpg",
      "images/city/ct4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },
  
  // 6
  "Nike-Air-Max-Dn8-2": {
    name: "Nike Air Max Dn8",
    price: 13495,
    images: [
      "images/dn8/dn5.jpg",
      "images/dn8/dn6.jpg",
      "images/dn8/dn7.jpg",
      "images/dn8/dn8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },

  // 7
  "Nike-Uplift-SC": {
    name: "Nike Uplift SC",
    price: 4095,
    images: [
      "images/uplift/up1.jpg",
      "images/uplift/up2.jpg",
      "images/uplift/up3.jpg",
      "images/uplift/up4.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category: "Kids's Shoes"
  },


  "Nike-Vomero-5": {
    name: "Nike Vomero 5",
    price: 7995,
    images: [
      "images/vomero 5/vm5.jpg",
      "images/vomero 5/vm6.jpg",
      "images/vomero 5/vm7.jpg",
      "images/vomero 5/vm8.jpg"
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    category:"kids' Shoes"
  },
  // Add more shoes here
};

const product = products[productId];

// Inject data into page
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = `MRP: ₹${product.price.toLocaleString()}`;
document.getElementById("main-image").src = product.images[0];

// Create thumbnails
const thumbList = document.getElementById("thumbnail-list");
product.images.forEach((src, index) => {
  const thumb = document.createElement("img");
  thumb.src = src;
  thumb.className = "img-thumbnail";
  thumb.style.cursor = "pointer";
  thumb.onclick = () => {
    document.getElementById("main-image").src = src;
  };
  thumbList.appendChild(thumb);
});

// Create size buttons
const sizeWrap = document.getElementById("size-options");
product.sizes.forEach(size => {
  const btn = document.createElement("button");
  btn.className = "btn btn-outline-secondary";
  btn.textContent = size;
  sizeWrap.appendChild(btn);
});

// Favourites
document.getElementById("add-to-fav").addEventListener("click", function () {
  const favs = JSON.parse(localStorage.getItem("favourites")) || [];
  if (!favs.some(item => item.id === productId)) {
    favs.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category:product.category,
    });
    localStorage.setItem("favourites", JSON.stringify(favs));
    this.innerHTML = "✔ Added";
    this.classList.add("btn-success");
  }
});


/* ---- ADD TO BAG -------------------------------------------------------- */
document.getElementById("add-to-bag").addEventListener("click", () => {
  let bag = JSON.parse(localStorage.getItem("bag")) || [];

  // if already in bag, just +1 qty
  const found = bag.find(i => i.id === productId && i.size === "default");
  if (found) {
    found.qty += 1;
  } else {
    bag.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      size: "default",   // replace with real selected size if you add sizing
      qty: 1
    });
  }

  localStorage.setItem("bag", JSON.stringify(bag));
 
  const toastEl = document.getElementById("bagToast");
  const toast = new bootstrap.Toast(toastEl);
  toast.show();

});



