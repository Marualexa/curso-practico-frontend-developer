const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.deskton-menu');
const menuEsteIcon = document.querySelector('.menu');
const movilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

emailMenu.addEventListener('click', toggleDesktopMenu);
menuEsteIcon.addEventListener('click', toggleMovilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMovilMenu() {
    movilMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    let mobilMenuOpen = movilMenu.classList.contains('inactive')

    aside.classList.toggle('inactive');

    if (movilMenu.classList.contains('inactive'))
}
