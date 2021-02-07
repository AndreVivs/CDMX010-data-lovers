import data from './data/pokemon/pokemon.js';
import {filterGeneration, filterByType, pokemons, sortAZ, sortZA} from "./data.js";
import {mainCard} from "./pokeCards.js";
//Obtaining pokemons data in cards
function setCards() {
  let containerCards = document.getElementById("containerCards");
  let emptyCard ="";
  pokemons.forEach(poke => emptyCard += mainCard(poke));

  containerCards.innerHTML = emptyCard;
}
setCards();

//Obtaining pokemons filtered by ganeration
let generation = document.querySelectorAll(".generation");
generation.forEach(function(button){
  button.addEventListener("click", function (){
    let containerCards = document.getElementById("containerCards");
    let emptyCard ="";
    let valueButton = filterGeneration(button.id)
    console.log(valueButton)
    valueButton.forEach(generation => emptyCard += mainCard(generation));
    containerCards.innerHTML = emptyCard;
  });
}) 

//Sorted pokemons

//Obtaining pokemons filtered by type
let type = document.querySelectorAll(".type");
type.forEach(function(button){
  button.addEventListener("click", function (){
    let containerCards = document.getElementById("containerCards");
    let emptyCard ="";
    let valueButton = filterByType(button.id)
    console.log(valueButton)
    valueButton.forEach(pokeType => emptyCard += mainCard(pokeType));

    containerCards.innerHTML = emptyCard;
  });
}) 




/*console.log("Generation Kanto",filterGeneration("kanto"));

console.log("Generation Johto",filterGeneration("johto"));

console.log("Grass type",filterByType("grass"));*/