import data from './data/pokemon/pokemon.js';
import {filterGeneration, filterByType, pokemons, sortAZ, sortZA} from "./data.js";
import {mainCard} from "./pokeCards.js";
//Obtaining pokemons data in cards
const az = document.getElementById("AZ");
const za = document.getElementById("ZA");
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
    const dataFilteredGeneration = filterGeneration(button.id)
    console.log(dataFilteredGeneration)
    dataFilteredGeneration.forEach(generation => emptyCard += mainCard(generation));
    containerCards.innerHTML = emptyCard;
    //Sorting pokemons A-Z
    az.addEventListener("click", function(){
      let containerCards = document.getElementById("containerCards");
      let emptyCard ="";
      const sortedDataByType = sortAZ(dataFilteredGeneration)
      sortedDataByType.forEach(sortDataType => emptyCard += mainCard (sortDataType));
      
      containerCards.innerHTML = emptyCard;
    })
    //Sorting pokemons Z-A
    za.addEventListener("click", function(){
      let containerCards = document.getElementById("containerCards");
      let emptyCard ="";
      const sortedDataByType = sortZA(dataFilteredGeneration)
      sortedDataByType.forEach(sortDataType => emptyCard += mainCard (sortDataType));
      
      containerCards.innerHTML = emptyCard;
    })
  });
}) 
//Obtaining pokemons filtered by type
let type = document.querySelectorAll(".type");
type.forEach(function(button){
  button.addEventListener("click", function (){
    let containerCards = document.getElementById("containerCards");
    let emptyCard ="";
    const dataFilteredByType = filterByType(button.id)
    console.log(dataFilteredByType)
    dataFilteredByType.forEach(pokeType => emptyCard += mainCard(pokeType));

    containerCards.innerHTML = emptyCard;
    //Sorting pokemons A-Z
    az.addEventListener("click", function(){
      let containerCards = document.getElementById("containerCards");
      let emptyCard ="";
      const sortedDataByType = sortAZ(dataFilteredByType)
      sortedDataByType.forEach(sortDataType => emptyCard += mainCard (sortDataType));
      
      containerCards.innerHTML = emptyCard;
    })
    //Sorting pokemons Z-A
    za.addEventListener("click", function(){
      let containerCards = document.getElementById("containerCards");
      let emptyCard ="";
      const sortedDataByType = sortZA(dataFilteredByType)
      sortedDataByType.forEach(sortDataType => emptyCard += mainCard (sortDataType));
      
      containerCards.innerHTML = emptyCard;
    })
  });
}) 

  


/*let newArrayByType = valueButton.map(pokeType => emptyCard += mainCard(pokeType));
  
    console.log("creando nuevo array", newArrayByType.sort())
    containerCards.innerHTML = emptyCard;
  });
  return newArrayByType
}) 

console.log("holis", newArrayByType)


/*console.log("Generation Kanto",filterGeneration("kanto"));
console.log("Generation Johto",filterGeneration("johto"));
console.log("Grass type",filterByType("grass"));*/