// ### Problema 6:

// Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

let matriz = [7,2,5,3,5,3];

let br = [7,2,5,4,6,3,5,3];

let faltan = br.filter(x => matriz.indexOf(x) == -1);
console.log(faltan)
