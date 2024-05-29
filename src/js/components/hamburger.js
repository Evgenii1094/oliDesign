const hamburgerMenu = () => {
    const hamburgerBtn = document.querySelector('.header__hamburger'),
          header = document.querySelector('.header'),
          overlay = document.querySelector('.overlay');

    const closeMenu = () => {
        header.classList.remove('is-opened');
        document.body.style.overflow = '';
        overlay.classList.remove('is-show');
    };

    hamburgerBtn.addEventListener('click', () => {
        header.classList.add('is-opened');
        document.body.style.overflow = 'hidden';
        overlay.classList.add('is-show');
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.header__close')) {
            closeMenu();
        } else if (e.target.closest('.header__link')) {
            closeMenu();
        }
    });
}

export default hamburgerMenu;
