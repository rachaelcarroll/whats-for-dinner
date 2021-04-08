/*--------------------QUERY SELECTORS----------------------*/
var sideRadio = document.querySelector('#side-option');
var mainRadio = document.querySelector('#main-option');
var dessertRadio = document.querySelector('#dessert-option');
var entireMealRadio = document.querySelector('#entire-meal');
var potIcon = document.querySelector('#cookpot');
var letsCookBtn = document.querySelector('#lets-cook');
var clearBtn = document.querySelector('.clear-button');
var suggestionTitle = document.querySelector('.suggestion-title');
var suggestedMeal = document.querySelector('p');

/*--------------------EVENT LISTENERS----------------------*/
letsCookBtn.addEventListener('click', randomMeal);
/*------------------------FUNCTIONS-------------------------*/
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomMeal() {
  event.preventDefault();
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];

  if(sideRadio.checked === true){
    suggestedMeal.innerText =`${randomSide}!`;
    displayMeal();
  } else if(mainRadio.checked === true){
    suggestedMeal.innerText = `${randomMain}!`;
    displayMeal();
  } else if(dessertRadio.checked === true){
    suggestedMeal.innerText = `${randomDessert}!`;
    displayMeal();
  } else if(entireMealRadio.checked === true){
    suggestedMeal.innerText = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`
    displayMeal();
  }
  }

function displayMeal() {
    potIcon.classList.add('hidden');
    suggestionTitle.classList.remove('hidden');
    suggestedMeal.classList.remove('hidden');
    clearBtn.classList.remove('hidden');
  }
