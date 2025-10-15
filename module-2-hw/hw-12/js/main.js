///////////////////////////// burger-menu////////////////////////////////////////////

(function() {
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

    ///////////////////////////////modal////////////////////////////////////////

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__controls-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
        document.querySelector('.modal').classList.toggle('modal--opened')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
            document.querySelector('.modal').classList.remove('modal--opened')
        }

    }
    
    
    // мой вариант модального окна
    // const modalClose = document.querySelector('.modal__cancel')
    // const modalOpen = document.querySelector('.about__controls-button')
    
    // console.log(modalOpen)
    // console.log(modalClose)
    // console.log(document.querySelector('.modal'))
    
    // modalOpen.addEventListener('click', () => {
        //     document.body.classList.add('body--opened-modal')
        //     document.querySelector('.modal').classList.add('modal--opened')
        // })
        
        // modalClose.addEventListener('click', () => {
            //     document.body.classList.remove('body--opened-modal')
            //     document.querySelector('.modal').classList.remove('modal--opened')
            // })
            
            // /////////////////////////////////program/////////////////////////////////
            
            const tabControls = document.querySelector('.tab-controls')
            
            tabControls.addEventListener('click', toggleTab)
            
            function toggleTab(e) {
                
                const tabControl = e.target.closest('.tab-controls__link')
                
                if (!tabControl) return
                e.preventDefault()
                if (tabControl.classList.contains('tab-controls__link--active')) return
                
                
                console.log('fff')
                
                const tabContentID = tabControl.getAttribute('href')
                const tabContent = document.querySelector(tabContentID)
                const ActiveControls = document.querySelector('.tab-controls__link--active')
                const ActiveContent = document.querySelector('.tab-content--show')
                
                if (ActiveControls) {
                    ActiveControls.classList.remove('tab-controls__link--active')
                }
                
                if (ActiveContent) {
                    ActiveContent.classList.remove('tab-content--show')
                }
                
                tabControl.classList.add('tab-controls__link--active')
                tabContent.classList.add('tab-content--show')
                
            }
            
            /////////////////////accordion///////////////////////
            
            const accordionLists = document.querySelectorAll('.accordion-list')
            
            accordionLists.forEach(el => {
                
                el.addEventListener('click', (e) => {

                    const accordionList = e.currentTarget
                    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
                    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

                    const accordionControl = e.target.closest('.accordion-list__control')

                    if (!accordionControl) return
                    const accordionItem = accordionControl.parentElement
                    const accordionContent = accordionControl.nextElementSibling

                    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                        accordionOpenedItem.classList.remove('accordion-list__item--opened')
                        accordionOpenedContent.style.maxHeight = null;
                    }
                    accordionItem.classList.toggle('accordion-list__item--opened')

                    if (accordionItem.classList.contains('accordion-list__item--opened')) {
                        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                    } else {
                        accordionContent.style.maxHeight = null;
                    }

                })
                
            })

/////////////////////////////////////////////slider///////////////////////////////////////////////

            const swiper = new Swiper('.swiper', {

            spaceBetween: 32,
            slidesPerView: 1.4,

            pagination: {
                el: '.gallery__pagination',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.gallery__next',
                prevEl: '.gallery__prev',
            },

            breakpoints: {
                450: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                },
                
                801: {
                    spaceBetween: 32,
                    slidesPerView: 3,
                },

                1101: {
                    slidesPerView: 4,
                }
            }
});

})()