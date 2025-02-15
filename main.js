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
  if(sideRadio.checked){
    suggestedMeal.innerText =`${sides[getRandomIndex(sides)]}!`;
    displayMeal();
  } else if(mainRadio.checked){
    suggestedMeal.innerText = `${mains[getRandomIndex(mains)]}!`;
    displayMeal();
  } else if(dessertRadio.checked){
    suggestedMeal.innerText = `${desserts[getRandomIndex(desserts)]}!`;
    displayMeal();
  } else if(entireMealRadio.checked){
    suggestedMeal.innerText = `${sides[getRandomIndex(sides)]} with a side of ${mains[getRandomIndex(mains)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
    displayMeal();
  }
  }

function displayMeal() {
    potIcon.classList.add('hidden');
    suggestionTitle.classList.remove('hidden');
    suggestedMeal.classList.remove('hidden');
    clearBtn.classList.remove('hidden');
  }
