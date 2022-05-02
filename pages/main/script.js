const open = document.getElementById('learn-more-open')
const modal_container = document.getElementById('modal-container')
const close = document.getElementById('close')

open.addEventListener('click', () => {
   modal_container.classList.add('show')
})

close.addEventListener('click', () => {
   modal_container.classList.remove('show')
})


const open2 = document.getElementById('learn-more-open-jennifer')
const modal_container2 = document.getElementById('modal-container-katrine')
const close2 = document.getElementById('close-katrine')

open2.addEventListener('click', () => {
   modal_container2.classList.add('show')
})

close2.addEventListener('click', () => {
   modal_container2.classList.remove('show')
})


const open3 = document.getElementById('learn-more-jennifer')
const modal_container3 = document.getElementById('modal-container-katrine')
const close3 = document.getElementById('close')

open3.addEventListener('click', () => {
   modal_container3.classList.add('show')
})

close3.addEventListener('click', () => {
   modal_container3.classList.remove('show')
})