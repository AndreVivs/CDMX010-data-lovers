 import data from './data/pokemon/pokemon.js';
 export const pokemons = data.pokemon;
 
 //Filter by Generation
 export function filterGeneration(zone){
  let pokemonsFiltered=data.pokemon.filter((generation)=>{
    if(generation === generation){
      return generation.generation.name===zone
    }/*else{ ¿como puedo retornar setCards() cuando el identificador no obtiene el valor esperado?
      return data.pokemon === pokemon  no retorna valor en consola*/
   })
   return pokemonsFiltered
 }

//Filtered by type
 export const filterByType = (type) => {
  const pokemonsByType = pokemons.filter(function(pokemon) {
    if(type === type){
      return pokemon.type.includes(type)
    }
  })
  return pokemonsByType
}

//Sorting AZ
export let sortAZ = ()=>{
  let sortedPokemons = pokemons.sort (function (a,z) { 

    if (a.name < z.name) return -1;
    if (a.name > z.name) return 1;
    return 0;
  })
  console.log("Este es el ordenado de la A-Z", sortedPokemons)
  return sortedPokemons
}

//Sorting ZA
export let sortZA = ()=>{
  let sortedPokemons = pokemons.sort (function (a,z) { 

    if (a.name < z.name) return 1;
    if (a.name > z.name) return -1;
    return 0;
  })
  console.log("Este es el ordenado de la Z-A", sortedPokemons)
  return sortedPokemons
}


/*let sortCards = document.getElementById("AZ").addEventListener("click", sortAZ())
sortCards.forEach(sort => emptyCard += mainCard(sort));
console.log("yo soy sort", sortCards); esto va en el main*/

/*Sorting lower to higher and higher to lower
export const numberedList = (x, y) =>{
  const numberedOrder = pokemons.sort(function (a,b){
    if (a.num > b.num){
      let orderDefine = x;
      return orderDefine;
    }
    if (a.num < b.num){
      let orderDefinetwo = y;
      return orderDefinetwo;
    }
    return 0
    }); return numberedOrder;
}; console.log(numberedList(1, -1));*/