'use strict'

const menuList = document.querySelector('.menu__list');

menuList.addEventListener('click', (e) => {
    if (e.target.closest('.menu__list-item')) {
        const menuListItems = document.querySelectorAll('.menu__list-item');
        menuListItems.forEach(item => item.classList.remove('active'));

        e.target.closest('.menu__list-item').classList.add('active')
    }
});