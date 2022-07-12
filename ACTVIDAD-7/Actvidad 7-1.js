// Ejercicio 7-1

function buscarPalabra(texto = "", palabra){
    return texto.includes(palabra);
}

console.log(buscarPalabra("Hola mundo", "mundo"));
