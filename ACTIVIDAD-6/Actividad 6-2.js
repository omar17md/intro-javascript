// Ejercicio 6-2

let arreglo = [4, 6, 1, 0, 8, 2, 45, 11, 5, 33, 50, 101];
let arregloOrdenado = arreglo.sort((a, b) => a - b);

for (let index = 0; index < arregloOrdenado.length; index++) {
    console.log(arregloOrdenado[index]);
}