window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let burgerBtn = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu'),
        burgerClose = document.querySelector('.burger__close');

        burgerBtn.addEventListener('click', () => {
            burgerMenu.style.display = 'block';
            overlay.style.display = 'block';
        });
        burgerClose.addEventListener('click', () => {
            burgerMenu.style.display = 'none';
            overlay.style.display = 'none';
        });

    let btnNav = document.querySelector('.nav__btn'),
        popUp = document.querySelector('.pop-up'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.pop-up__close'),
        btnGet = document.querySelector('.get-in-touch__btn'),
        burgerGet = document.querySelector('.burger__get');

    btnNav.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        popUp.style.display = 'block';
        overlay.style.display = 'block';
    }); 

    btnGet.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        popUp.style.display = 'block';
        overlay.style.display = 'block';
    }); 
    
    burgerGet.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        popUp.style.display = 'block';
        overlay.style.display = 'block';
    }); 


    closeBtn.addEventListener('click', () => {
        document.body.style.overflow = 'visible';
        popUp.style.display = 'none';
        overlay.style.display = 'none';
    });



        let tab = document.querySelectorAll('.projects__item'),
            hiddenContent = document.querySelectorAll('.projects__hidden'),
            info = document.querySelector('.projects__list');

           
           tab.forEach((item) => { 
            item.addEventListener('mouseover', (e)=>{
                console.log(e);
                hiddenContent.forEach(i => {
                    i.style.display = 'block';
                    });
                });
            });
            tab.forEach((item) => { 
                item.addEventListener('mouseleave', (e)=>{
                    console.log(e);
                    hiddenContent.forEach(i => {
                        i.style.display = 'none';
                        });
                    });
                });

        

        

});