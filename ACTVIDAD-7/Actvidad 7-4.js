// Ejercicio 7-4

function buscarLetra(palabra = "",  letra){
    let contador = 0;
    let array = palabra.split("");
    for (let index = 0; index < array.length; index++) {
        if (array[index] == letra) {
            contador++;
        }
    }

    return contador;
}

console.log(buscarLetra("Palabra", "a"));