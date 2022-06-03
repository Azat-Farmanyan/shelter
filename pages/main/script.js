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
           <button id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
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
      <button id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
   </div>
   `
   lastCardID = currentLastCard.id
   firstCardID++
   productsContainer.querySelector('.card').remove();
   productsContainer.insertAdjacentHTML('beforeend', currentAnimal)
})

ourFrindRightButton.addEventListener('click', e => {
   if (lastCardID === 7) lastCardID = 0
   const currentLastCard = productsArray[lastCardID]
   const currentAnimal = `
   <div class="card">
      <img class="card-photo" src=" ${currentLastCard.img}" alt="${currentLastCard.name} pet">
      <div class="cart-name">${currentLastCard.name}</div>
      <button id="learn-more-katrine" class="learn-more-katrine">Learn more</button>
   </div>
   `
   lastCardID = currentLastCard.id
   productsContainer.lastElementChild.remove()
   productsContainer.insertAdjacentHTML('afterbegin', currentAnimal)
})


// Learn More 
console.log(productsContainer);