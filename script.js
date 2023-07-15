// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
const humburgerMenu = document.querySelector('#humburger-menu');

// klik humburger menu untuk menampilkan navbar
humburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar navbar untuk menghilangkan humburger menu
document.addEventListener('click', function (e) {
  if (!humburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
