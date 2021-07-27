// NAVBAR SCROLL
document.addEventListener('scroll', e => {
    const scroll = window.scrollY;
    const nav = document.querySelector('nav');
    if (scroll > 50) {
        nav.style.visibility = 'visible';
    } else {
        nav.style.visibility = 'hidden';
    }
});