const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.deskton-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

