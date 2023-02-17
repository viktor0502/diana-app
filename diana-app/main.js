const start = document.querySelector('#start')
const input = document.querySelector('#name')
const access = document.querySelector('.access')
const pageStart = document.querySelector('.get-started')
const pageForm = document.querySelector('.section-form')


input.addEventListener('change', ()=>{
    access.style.display = 'block'
})

start.addEventListener('click', ()=>{
    pageStart.style.display = "none"
    pageForm.style.display = "block"
})