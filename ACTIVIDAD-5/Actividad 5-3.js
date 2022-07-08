// Ejercicio 5-3

let arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
let arregloOrdenado = arreglo.sort((a,b) => a - b);


for (let index = 0; index < arregloOrdenado.length; index++) {
    console.log(arregloOrdenado[index]);
}