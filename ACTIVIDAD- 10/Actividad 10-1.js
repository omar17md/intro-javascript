// ### Problema 1:

// Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. 
//Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.

const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];


function diferenciaEdad(arr){
    const edades = arr.map((x) => x.age);
    return objeto = {
        oldest : Math.max.apply(null, edades),
        youngest : Math.min.apply(null, edades),
        'age-difference' : Math.max.apply(null, edades) -  Math.min.apply(null, edades)
    };
}

console.log(diferenciaEdad(Family));