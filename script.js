let phoneArr = [
  {
    name: "iphone15pro",
    link: "/image/iphone15pro.jpeg",
    price: "20$",
    txt: "Designer at work who don't have any content for their product.",
  },
  {
    name: "iphone8plus",
    link: "/image/iphone8plus.jpeg",
    price: "25$",
    txt: "Designer at work who don't have any content for their product.",
  },
  {
    name: "oppo",
    link: "/image/oppo.jpeg",
    price: "4000$",
    txt: "Designer at work who don't have any content for their product.",
  },
  {
    name: "samsungJ2",
    link: "/image/samsungJ2.jpeg",
    price: "100$",
    txt: "Designer at work who don't have any content for their product.",
  },
  {
    name: "samsungS20",
    link: "/image/samsungS20.jpeg",
    price: "380$",
    txt: "Designer at work who don't have any content for their product.",
  },
];
let clutter = "";
phoneArr.forEach(function (obj) {
  let pageMain = document.querySelector(".main");
  clutter += `
  <div class="box">
  <img src="${obj.link}" alt="${obj.name}" />
  <p id="txt">${obj.txt}</p>
  <p id="price">${obj.price}</p>
  <button>add to cart</button>
  </div>`;
  pageMain.innerHTML = clutter;
});
let cartIcon = document.querySelector(".cart");
let user = true;
cartIcon.addEventListener("click", function () {
  let centerBox = document.querySelector(".center .box");
  if (user) {
    centerBox.style.opacity = "1";
    centerBox.style.pointerEvents = "all";
    user = false;
  } else {
    centerBox.style.opacity = "0";
    centerBox.style.pointerEvents = "none";
    user = true;
  }
});
