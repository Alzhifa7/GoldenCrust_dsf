// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hambuger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hambuger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});