function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('slideshow').style.display = 'none';
        document.getElementById('home-screen').classList.add('active');
    }, 3000); // 2 second display + 1 second animation
});