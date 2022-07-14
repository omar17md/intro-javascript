// ### Problema 2:

// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.

const numbers = [ 1, -4, 12, 0, -3, 29, -150];
const suma = numbers.filter((x) => x >= 0).reduce((a,b) => a + b);
console.log(`La suma es ${suma}`);