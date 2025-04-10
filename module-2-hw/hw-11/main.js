const modal = document.querySelector('.sector-modal')
const buttonOpen = document.querySelector('.modal-open')

console.log(buttonOpen)
console.log(modal)

buttonOpen.addEventListener('click', () => {
    modal.classList.remove('closed')
})

modal.addEventListener('click', event => {
    const target = event.target

    if(target && target.classList.contains('modal') || target.classList.contains('modal-close')) {
        modal.classList.add('closed')
    }
})

document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape' && !modal.classList.contains('closed')) {
        modal.classList.toggle('closed')
    }
})
