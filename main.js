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

/*--------------------GLOBAL VARIABLES----------------------*/

// var sides = [
//   "Creamed Spinach",
//   "Mashed Butternut Squash",
//   "Asparagus",
//   "Crispy Potatoes",
//   "Sweet Potato Tots",
//   "Coconut Rice",
//   "Brussels Sprouts Chips",
//   "Bang Bang Cauliflower",
//   "Garlic Butter Mushrooms",
//   "Candied Yams"
// ];
//
// var mains = [
//   "Twice Baked Potato Casserole",
//   "Pineapple Chicken",
//   "Shakshuka",
//   "Thai Yellow Curry",
//   "Bibimbap",
//   "Grilled Salmon",
//   "Stuffed Peppers",
//   "BBQ Chicken Burgers",
//   "Ramen",
//   "Empanadas",
//   "Chicken Fried Rice",
//   "Sheet Pan Fajitas",
//   "Margarita Pizza"
// ];
// 
// var desserts = [
//   "Carrot Cake",
//   "Lemon Meringue Pie",
//   "Black Forest Cake",
//   "Banana Bread",
//   "Peach Cobbler",
//   "Raspberry Cheesecake",
//   "Funfetti Cake",
//   "Baklava",
//   "Flan",
//   "Ice Cream Sandwich",
//   "Macaroons",
//   "Chocolate Cupcakes",
//   "Pavlova",
//   "Pumpkin Pie",
//   "Key Lime Pie",
//   "Tiramisu",
//   "Croissants",
//   "Turtle Pie"
// ];

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

  console.log(randomSide)

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
