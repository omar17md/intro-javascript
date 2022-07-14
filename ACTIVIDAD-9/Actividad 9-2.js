// Problema 2:

// Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

// `const input = [12, 46, 32, 64];`

// Resultado esperado:

//   `{ mean: 38.5, median: 32 }`


const input = [12, 46, 32, 64];
let medio = input.length % 2 == 0 ? input.length / 2 - 1 :  input.length+1 / 2 - 1;
const promedio = input.reduce((a,b)=> (a+b)) / (input.length);
const ordenado = input.sort((a,b) => a-b);
const mediana = input.length % 2 == 0 ? (ordenado[medio] + ordenado[medio + 1])/ 2 : ordenado[medio];
console.log(`mean: ${promedio}, median: ${mediana}`);