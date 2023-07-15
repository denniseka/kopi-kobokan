// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
const humburgerMenu = document.querySelector('#humburger-menu');

const btnSearch = document.getElementById('search');
const searchForm = document.querySelector('.search-form');

// klik humburger menu untuk menampilkan navbar
humburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar navbar untuk menghilangkan humburger menu
document.addEventListener('click', function (e) {
  if (!humburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!btnSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

// Menampilkan tampilah search

btnSearch.addEventListener('click', function (e) {
  searchForm.classList.toggle('active');
});
