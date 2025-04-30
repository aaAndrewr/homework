// (function() {
// const burgerIcon = document.querySelector('.burger-icon')
// const burgerNavLink = document.querySelectorAll('.nav__link')

// console.log(document.body)
// console.log(burgerIcon)
// console.log(burgerNavLink)

// burgerIcon.addEventListener('click', () => {
//     if(document.body.classList.contains('body--opened-menu')) {
//         document.body.classList.remove('body--opened-menu')
//     } else {
//         document.body.classList.add('body--opened-menu')
//     }
// })

// for(let i = 0; i < burgerNavLink.length; i++) {
//     burgerNavLink[i].addEventListener("click", function() {
//         if(document.body.classList.contains('body--opened-menu')) {
//             document.body.classList.remove('body--opened-menu')
//         } else {
//             document.body.classList.add('body--opened-menu')
//         }
//     }) 
// }
// })()

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
})()