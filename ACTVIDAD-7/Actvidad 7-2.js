// Ejercicio 7-2

const number = [1, 2, 3, 4, 10, 11];

function sumaElementos(arreglo){
    return arreglo.reduce((a, b) => a + b, 0);
}

console.log(sumaElementos(number));