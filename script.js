// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
const humburgerMenu = document.querySelector("#humburger-menu");

const btnSearch = document.getElementById("search");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

const shoppingCard = document.querySelector(".shopping-card");
const btnShopping = document.getElementById("shopping-cart");

const btnItemDetails = document.querySelectorAll(".btn-item-detail");
const itemDetailModal = document.getElementById("item-detail-modal");
const btnModalClose = document.getElementById("btn-modal-close");

// klik humburger menu untuk menampilkan navbar
humburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar navbar untuk menghilangkan humburger menu
document.addEventListener("click", function (e) {
  if (!humburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!btnSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!btnShopping.contains(e.target) && !shoppingCard.contains(e.target)) {
    shoppingCard.classList.remove("active");
  }
});

// Menampilkan tampilah search
btnSearch.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
});

// Menampilkan Shopping Card
btnShopping.addEventListener("click", function (e) {
  shoppingCard.classList.toggle("active");
});

btnItemDetails.forEach((btn) => {
  //Menampilkan Modal box detail product
  btn.addEventListener("click", function (e) {
    itemDetailModal.style.display = "flex";
  });
});

btnModalClose.addEventListener("click", function (e) {
  itemDetailModal.style.display = "none";
});

window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
