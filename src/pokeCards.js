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