const open_katrine = document.getElementById('learn-more-katrine')
const modal_container = document.getElementById('modal-container')
const close = document.getElementById('close-katrine')

open_katrine.addEventListener('click', () => {
   modal_container.classList.add('show')
})

close.addEventListener('click', () => {
   modal_container.classList.remove('show')
})