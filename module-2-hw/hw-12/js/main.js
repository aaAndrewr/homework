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
})()


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
