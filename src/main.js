/* Aqui va el código que tenga que ver con mostrar los datos en la pantalla (interacción con el DOM). 
Operaciones como creación de nodos.
Registro de manejadores de eventos (event listeners o event handlers), ...*/
import data from './data/pokemon/pokemon.js';

import {printData} from "./data.js";

import {filterGeneration} from './data.js';

import {filterType} from "./data.js";

//printData();
filterGeneration("kanto");


//console.log("estos son todos los pokemon", data);

console.log ("Generation",filterGeneration('johto'));

console.log("filtrado por tipo", filterType("grass"));