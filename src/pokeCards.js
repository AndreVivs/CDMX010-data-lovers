//Main Card template
export let mainCard = (pokemon) =>{
    const structure = `
     <div class="idPokemon" id="${pokemon.num}">
      <article class="pokemon">
      <img class="circle" src ="${pokemon.img}">
      <h2 class = "card-title">${pokemon.name}</h2>
      <p class = "card-text">${pokemon.num}</p>
      <p class = "card-text">${pokemon.type}</p>
      </article>
     </div>
    `;
  return structure;
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