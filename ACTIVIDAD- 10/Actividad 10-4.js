// ### Problema 4:

// Escriba una función de JavaScript que tomará una serie de números almacenados

// y encontrará el segundo número más bajos y segundos más altos, respectivamente

// del siguiente arreglo: const arr = [3,4,6,1,5,2,9,10,23,12]

const arr = [3,4,6,1,5,2,9,10,23,12]

const ordenado = arr.sort((a,b) => a-b);

console.log(`Segundo numero mas bajo: ${ordenado[1]}\nSegundo numero mas alto ${ordenado[ordenado.length-2]}`);