const productsContainer = document.querySelector('.cards')

const rightButton = document.querySelector('.right-button')
const rightButtonEnd = document.querySelector('.right-button-end')
const pageNumbers = document.querySelector('.center-button')
const leftButton = document.querySelector('.left-button')
const leftButtonEnd = document.querySelector('.left-button-end')

getProducts()
let productsArray = []
let numberOfCards = 8

async function getProducts() {
   const response = await fetch('./././animals.json')
   // console.log(response);

   productsArray = await response.json()
   // console.log(productsArray);

   renderProducts(productsArray)
}

let firstCardID = 0
let lastCardID = 2

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
function checkBUttonStyles(num) {
   num = +num
   if (num == 1) {
      leftButton.innerHTML = `<img src="../../assets/icons/left-light.png" alt="arrow">`
      leftButton.style.border = `2px solid #CDCDCD`
      leftButtonEnd.innerHTML = `<img src="../../assets/icons/leftend-light.png" alt="arrow">`
      leftButtonEnd.style.border = `2px solid #CDCDCD`
   }
   if (num > 1) {
      leftButton.innerHTML = `<img src="../../assets/icons/left-dark.png" alt="arrow">`
      leftButton.style.border = `2px solid #F1CDB3`
      leftButtonEnd.innerHTML = `<img src="../../assets/icons/left-end-dark.png" alt="arrow">`
      leftButtonEnd.style.border = `2px solid #F1CDB3`
   }
   if (num > 5) {
      rightButton.innerHTML = `<img src="../../assets/icons/right-light.png" alt="arrow">`
      rightButton.style.border = `2px solid #CDCDCD`
      rightButtonEnd.innerHTML = `<img src="../../assets/icons/right-end-light.png" alt="arrow">`
      rightButtonEnd.style.border = `2px solid #CDCDCD`
   }
   if (num < 6) {
      rightButton.innerHTML = `<img src="../../assets/icons/right.png" alt="arrow">`
      rightButton.style.border = `2px solid #F1CDB3`
      rightButtonEnd.innerHTML = `<img src="../../assets/icons/right-end.png" alt="arrow">`
      rightButtonEnd.style.border = `2px solid #F1CDB3`
   }

}
let numbers = pageNumbers.innerText
checkBUttonStyles(numbers)

rightButton.addEventListener('click', e => {
   let numbers = pageNumbers.innerText
   if (numbers < 6) {
      pageNumbers.innerHTML = `<span>${++numbers}</span>`
      for (let count = 0; count < numberOfCards; count++) {
         productsContainer.querySelector('.card').remove()
      }
      renderProducts(productsArray)
   }
   checkBUttonStyles(numbers)
})
rightButtonEnd.addEventListener('click', e => {
   let numbers = pageNumbers.innerText
   if (numbers < 6) {
      pageNumbers.innerHTML = `<span>${6}</span>`
      numbers = 6
      for (let count = 0; count < numberOfCards; count++) {
         productsContainer.querySelector('.card').remove()
      }
      renderProducts(productsArray)
      checkBUttonStyles(numbers)
   }
})


leftButton.addEventListener('click', e => {
   let numbers = pageNumbers.innerText
   if (numbers > 1) {
      pageNumbers.innerHTML = `<span>${--numbers}</span>`
      for (let count = 0; count < numberOfCards; count++) {
         productsContainer.querySelector('.card').remove()
      }
      renderProducts(productsArray)
   }
   checkBUttonStyles(numbers)
})

leftButtonEnd.addEventListener('click', e => {
   let numbers = pageNumbers.innerText
   if (numbers > 1) {
      pageNumbers.innerHTML = `<span>${1}</span>`
      for (let count = 0; count < numberOfCards; count++) {
         productsContainer.querySelector('.card').remove()
      }
      renderProducts(productsArray)
      checkBUttonStyles(1)
   }
})

function renderProducts(productsArray) {
   let curentCardsInPage = []
   if (screen.width <= 1098) {
      numberOfCards = 6
   }
   if (screen.width <= 610) {
      numberOfCards = 3
   }
   for (let i = 0; i < numberOfCards; i++) {
      const randomNumber = getRandomInt(8)
      if (!curentCardsInPage.includes(randomNumber)) {
         curentCardsInPage.push(randomNumber)

         const item = productsArray[randomNumber]
         const productHTML = `
      <div class="card">
         <div class="card-photo">
            <img src="${item.img}" alt="${item.name}">
         </div>
         <div class="pet-name">
            <p>${item.name}</p>
         </div>
         <div class="learn-more">
            <button cardID = "${item.id}" id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
         </div>
      </div>`;
         lastCardID = item.id
         productsContainer.insertAdjacentHTML('beforeend', productHTML)
      } else {
         i--
      }
   }
}


// Learn More 

// console.log(productsContainer);
productsContainer.addEventListener('click', e => {

   if (e.target.hasAttribute('cardID')) {
      const currentClickedCardId = Number(e.target.getAttribute("cardID")) - 1
      const currentAnimalInfo = productsArray[currentClickedCardId]
      // console.log(currentAnimalInfo);

      const currentModalBlock = `
      <div class="modal-container" id="modal-container">
         <div class="modal">
            <div class="modal-photo">
               <img src="${currentAnimalInfo.img}" alt="${currentAnimalInfo.name} pet">
            </div>
            <div class="modal-text-box">
               <div class="modal-txtbox-title">${currentAnimalInfo.name}</div>
               <div class="modal-txtbox-subtitle">${currentAnimalInfo.type} - ${currentAnimalInfo.breed}</div>
               <div class="modal-txtbox-main-text">
                    ${currentAnimalInfo.description}
               </div>
               <div class="modal-txtbox-list">
                  <ul class="modal-txtbox-list-item"> <span>- Age:</span> ${currentAnimalInfo.age}</ul>
                  <ul class="modal-txtbox-list-item"> <span>- Inoculations:</span> ${currentAnimalInfo.inoculations}</ul>
                  <ul class="modal-txtbox-list-item"> <span>- Diseases:</span> ${currentAnimalInfo.diseases}</ul>
                  <ul class="modal-txtbox-list-item"> <span>- Parasites:</span> ${currentAnimalInfo.parasites}</ul>
               </div>
            </div>
            <button closeModal id="close-katrine"><img closeModal src="../../assets/icons/close.png" alt="close"></button>
         </div>
      </div>`
      productsContainer.insertAdjacentHTML('afterbegin', currentModalBlock)
   }
})
const modalBlock = document.querySelector('.modal')

productsContainer.addEventListener('click', e => {
   // console.log(e.target);
   if (e.target.hasAttribute('closeModal')) {
      productsContainer.querySelector('.modal-container').remove()
   }
})
