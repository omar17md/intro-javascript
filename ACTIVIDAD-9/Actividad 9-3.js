// Problema 3

// Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.

// Caso de prueba:

// `const input = 6;`

// Result: `720`


const input = 5;
const factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(input));