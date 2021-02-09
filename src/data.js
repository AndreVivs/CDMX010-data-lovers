/*Manipulación de datos a través de arreglos y objetos.
- FilterData(data, condition): Filter recibira la data, y retornará aquellos datos que cumplan con la condición.
- SortData(data, sortBy, sortOrder): Sort u ordenar recibe tres parámetros. 
    data, nos entrega los datos.
    sortBy, nos dice cuál de los campos de la data se quiere ordenar. 
    sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
-computeStats(data): Permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
Las funciones son independientes del DOM y serán usadas desde src/main.js para:
 -cargar la página
 -cada vez que el usuario interactúe (click, filtrado, ordenado, ...).*/
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
//tengo que pasar el parametro por esta funcion
export let sortAZ = (pokeType)=>{
  let sortedPokemons = pokeType.sort (function (a,z) { 
    if (a.name < z.name) return -1;
    if (a.name > z.name) return 1;
    return 0;
  })
  console.log("Este es el ordenado de la A-Z", sortedPokemons)
  return sortedPokemons
}
//Sorting ZA
export let sortZA = (pokeType)=>{
  let sortedPokemons = pokeType.sort (function (a,z) { 
    if (a.name < z.name) return 1;
    if (a.name > z.name) return -1;
    return 0;
  })
  console.log("Este es el ordenado de la Z-A", sortedPokemons)
  return sortedPokemons
}
/*//Esta funcion ordena todos los pokemones
export let sortZA = (pokemons)=>{
  let sortedPokemons = pokemons.sort (function (a,z) { 
    if (a.name < z.name) return 1;
    if (a.name > z.name) return -1;
    return 0;
  })
  console.log("Este es el ordenado de la Z-A", sortedPokemons)
  return sortedPokemons
}*/