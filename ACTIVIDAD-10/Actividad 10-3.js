// ### Problema 3:

// Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz, cuyos elementos son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

function crearObjeto(arr){
    let objeto = {};
    arr.forEach(element => {
        element.forEach(x => {
            if(objeto.hasOwnProperty(x)){
                objeto[x]++;
            }else{
                objeto[x] = 1;
            }
        });
    });

    return objeto;
}

console.log(crearObjeto(input));