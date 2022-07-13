// Ejercicio 7-5

let arr = [45, 56, 32, 98, 1000, 5, 23];

function buscarMayor(arreglo){
    let mayor = arreglo[0];
    for (let index = 1; index < arreglo.length; index++) {
        if (arreglo[index] > mayor) {
           mayor = arreglo[index];
        }
    }

    return mayor;
}

console.log(`El numero mayor es ${buscarMayor(arr)}`);