(function() {
            // /////////////////////////////////solutions/////////////////////////////////

            const solInit = document.querySelector('.solutions__open')
            const solImg = document.querySelector('.solutions__top')

            solInit.addEventListener('click', () => {

                const solList = document.querySelector('.solutions__list')

                if (solList.classList.contains('solutions__list--opened')) {
                    solList.classList.remove('solutions__list--opened')
                    solImg.classList.remove('solutions__top-rotate')
                } else {
                    solList.classList.add('solutions__list--opened')
                    solImg.classList.add('solutions__top-rotate')
                }

            })

            ///////////////////////////// burger-menu////////////////////////////////////////////

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

            //////////////////////////////////swiper///////////////////////////

            const swiper = new Swiper('.swiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 32,
            centeredSlides: true,
            direction: 'horizontal',
            loop: true,
            speed: 500,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            });


    // contact 

    const keywords = document.querySelectorAll('.keyword');
    const topInput = document.querySelector('.top__input');
    
    console.log('Keywords found:', keywords.length);
    console.log('Search input:', topInput);
    
    keywords.forEach(keyword => {
        keyword.addEventListener('click', (e) => {
            e.preventDefault();
            const text = keyword.textContent.trim();
            if (topInput) {
                topInput.value = text;
                console.log('Search value set to:', text);
            } else {
                console.error('Search input not found!');
            }
        });
    });

    // modal

    const modalOpen = document.querySelector('.modal__open')
    const modalClose = document.querySelector('.modal__cancel')
    const modal = document.querySelector('.modal')

    modalOpen.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--opened')
    })
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal--opened')
    })

    const keywordsModal = document.querySelectorAll('.modal__keyword');
    const modalInput = document.querySelector('.modal__input');
    
    console.log('M-Keywords found:', keywords.length);
    console.log('Search input:', modalInput);
    
    keywordsModal.forEach(keywordModal => {
        keywordModal.addEventListener('click', (e) => {
            e.preventDefault();
            const text = keywordModal.textContent.trim();
            if (modalInput) {
                modalInput.value = text;
                console.log('Search value set to:', text);
            } else {
                console.error('Search input not found!');
            }
        });
    });

})()