// ### Problema 5:

// De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.

let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]

// 1.Retorna en un array las calificaciones de todos los estudiantes.
function sacarCalificaciones(arr){
    let calificaciones = [];
    arr.forEach(element => {
        element.materias.forEach(x => {
            calificaciones.push(x.calificacion)
        });
    });

    return calificaciones;
}

console.log(sacarCalificaciones(info));

// 2 Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos

function calcularPromedio(arr){
    let promedios = [];
    let suma = 0;
    let contador = 0;
    let promedio = 0;

    arr.forEach(element => {
        element.materias.forEach(x => {
           suma += x.calificacion
           contador++;
        });
        promedio = suma / contador;

        promedios.push({[element.nombre] : {"promedio" : promedio}});
        
        contador = 0;
        suma = 0;
    });

    return promedios;
}

console.log(calcularPromedio(info));


// 1. Retorna la calificación mas baja

function calificacionBaja(arr){
    let calificaciones = [];
    arr.forEach(element => {
        element.materias.forEach(x => {
            calificaciones.push(x.calificacion)
        });
    });

    return Math.min.apply(null, calificaciones)
}

console.log(calificacionBaja(info));


// 2. Retorna la calificación mas alta
function calificacionAlta(arr){
    let calificaciones = [];
    arr.forEach(element => {
        element.materias.forEach(x => {
            calificaciones.push(x.calificacion)
        });
    });

    return Math.max.apply(null, calificaciones)
}

console.log(calificacionAlta(info));