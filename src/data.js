/*El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
Este archivo contiene toda la funcionalidad que corresponda a:
Obtener.
Procesar.
Manipular datos.
Funciones Como:
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

export function printData (){
  let tarjets =""
  let pokemons=data.pokemon.forEach(p=>{
    tarjets +=`
    <article class="pokemon">
    <img src ="${p.img}">
    <h2 class = "card-title">${p.name}</p>
    <p class = "card-text">${p.num}</p
    <p class = "card-text">${p.type}</p>
    </article>`
    tarjetas.innerHTML=tarjets;
  });
  return pokemons
}

 export function filterGeneration(zone){
  let tarjets =""
   let pokemonsFiltered=data.pokemon.filter((unSoloBenditoPokemon)=>{
    tarjets +=`
    <article class="pokemon">
    <img src ="${unSoloBenditoPokemon.img}">
    <h2 class = "card-title">${unSoloBenditoPokemon.name}</p>
    <p class = "card-text">${unSoloBenditoPokemon.num}</p
    <p class = "card-text">${unSoloBenditoPokemon.type}</p>
    </article>`
    filterkanto.innerHTML=tarjets;
     return unSoloBenditoPokemon.generation.name===zone
   })
   return pokemonsFiltered
 }

 export function filterType(type){
   let pokemonsType=data.pokemon.filter((unSoloBenditoPokemon)=>{
     return unSoloBenditoPokemon.type[0]===type
   })
   return pokemonsType
 }
