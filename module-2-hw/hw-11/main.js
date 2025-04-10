const modal = document.querySelector('.sector-modal')
const buttonOpen = document.querySelector('.modal-open')
// const buttonClose = document.querySelector('.modal-close')

console.log(buttonOpen)
// console.log(buttonClose)
console.log(modal)

buttonOpen.addEventListener('click', () => {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    // modal.classList.remove('closed')
    // buttonOpen.style.backgroundColor = '#575151'
})

// 1 вариант записи

modal.addEventListener('click', () => {
    const target = modal.target
    if(target && target.classList.contain('modal') || modal.style.opacity === '1') {
        modal.style.visibility = 'hidden'
        modal.style.opacity = '0'
    }
})

// 2 вариант записи

// buttonClose.addEventListener('click', () => {
//     modal.style.visibility = 'hidden'
//     modal.style.opacity = '0'
//     // modal.classList.add('closed')
//     // buttonOpen.style.backgroundColor = '#8f3557'
// })