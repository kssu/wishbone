window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function clickBtn (triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                modal.style.display = 'none';
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

    }
    clickBtn('.burger', '.burger-menu', '.burger__close');
    clickBtn('.nav__btn', '.pop-up', '.pop-up__close');
    clickBtn('.get-in-touch__btn', '.pop-up', '.pop-up__close');
    clickBtn('.burger__get', '.pop-up', '.pop-up__close');
    
    function tabs (headerSelector, tabSelector, contentSelector) {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);
    
        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });
        }
    
        function showTabContent(i = 1) {
            content[i].style.display = 'block';
        }
    
        hideTabContent();
        showTabContent();
    
        header.addEventListener('mouseover', (e) => {
            const target = e.target;
    
            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, '')) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
                tab.forEach((item, i) => {
                    if ( target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }
    
    tabs('.projects__list', '.projects__item', '.projects__hidden');
        
});