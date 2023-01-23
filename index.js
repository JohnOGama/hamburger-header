const hambtnEl = document.querySelector('.btn')
const conEl = document.querySelector('.hamburger')
const closebtnEl = document.querySelector('.btn1')

hambtnEl.addEventListener('click', () =>{
    conEl.classList.remove('active')
})

closebtnEl.addEventListener('click', () =>{
    conEl.classList.add('active')
})

