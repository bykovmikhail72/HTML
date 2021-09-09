const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.topnav__list'),
      list = document.querySelectorAll('.topnav__item');

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('hamburger-active')) {
        hamburger.classList.remove('hamburger-active');
        menu.style.left = "-100%";
    } else {
        hamburger.classList.add('hamburger-active');
        menu.style.left = "0";
    }
});
list.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-active');
        menu.style.left = "-100%";
    });
});