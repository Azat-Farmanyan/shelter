const productsContainer = document.querySelector('.our-friend-cards')
getProducts()
let productsArray = []
let numberOfCards = 3

async function getProducts() {
   const response = await fetch('./././animals.json')
   // console.log(response);

   productsArray = await response.json()
   // console.log(productsArray);

   renderProducts(productsArray)
}
let ourFrindLeftButton = document.querySelector('.left-button')
let ourFrindRightButton = document.querySelector('.right-button')

if (screen.width <= 430) {
   ourFrindLeftButton = document.querySelector('.bottons-left-button')
   ourFrindRightButton = document.querySelector('.bottons-right-button')
}
let firstCardID = 0
let lastCardID = 2



function renderProducts(productsArray) {
   if (screen.width <= 1098) {
      numberOfCards = 2
   }
   if (screen.width <= 735) {
      numberOfCards = 1
   }
   for (let i = 0; i < numberOfCards; i++) {
      const item = productsArray[i]
      const productHTML = `
         <div class="card">
           <img class="card-photo" src=" ${item.img}" alt="${item.name} pet">
           <div class="cart-name">${item.name}</div>
           <button cardID = "${item.id}" id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
         </div>`;
      lastCardID = item.id
      productsContainer.insertAdjacentHTML('beforeend', productHTML)
   }
}

ourFrindLeftButton.addEventListener('click', e => {

   if (lastCardID === 7) lastCardID = 0
   const currentLastCard = productsArray[lastCardID]
   const currentAnimal = `
   <div class="card">
      <img class="card-photo" src=" ${currentLastCard.img}" alt="${currentLastCard.name} pet">
      <div class="cart-name">${currentLastCard.name}</div>
      <button cardID = "${currentLastCard.id}" id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
   </div>
   `
   lastCardID = currentLastCard.id
   firstCardID++
   productsContainer.querySelector('.card').remove();
   productsContainer.insertAdjacentHTML('beforeend', currentAnimal)
})

ourFrindRightButton.addEventListener('click', e => {
   if (lastCardID === 8) lastCardID = 0
   const currentLastCard = productsArray[lastCardID]
   const currentAnimal = `
   <div class="card">
      <img class="card-photo" src=" ${currentLastCard.img}" alt="${currentLastCard.name} pet">
      <div class="cart-name">${currentLastCard.name}</div>
      <button cardID = "${currentLastCard.id}" id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
   </div>
   `
   lastCardID = currentLastCard.id
   productsContainer.lastElementChild.remove()
   productsContainer.insertAdjacentHTML('afterbegin', currentAnimal)
})


// Learn More 
console.log(productsContainer);
productsContainer.addEventListener('click', e => {

   if (e.target.hasAttribute('cardID')) {
      const currentClickedCardId = Number(e.target.getAttribute("cardID")) - 1
      const currentAnimalInfo = productsArray[currentClickedCardId]
      console.log(currentAnimalInfo);

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
   console.log(e.target);
   if (e.target.hasAttribute('closeModal')) {
      productsContainer.querySelector('.modal-container').remove()
   }
})
