// Problema 1:

// Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.

// `const input = [ 1, 2, 3, 4, 5 ];`

// Resultado esperado:

// `[ 1, 4, 9, 16, 25]`

const input = [ 1, 2, 3, 4, 5 ];
const resultado = input.map((num) => num ** 2);
console.log(resultado);