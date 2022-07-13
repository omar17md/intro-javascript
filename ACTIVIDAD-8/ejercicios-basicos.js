// Ejercicios de Objetos y sus métodos básicos:


/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

// 1
console.log(student.name);

// 2
console.log(student['age']);

//3 
student.name = "Steve Jobs";
console.log(student);


/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    let studentKeys = Object.keys(student)
    console.log(studentKeys);
    


/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

if(student.hasOwnProperty('name')){
    console.log("La propiedad name se encuentra en el objeto");
}

/*
    /** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
La nueva edad debe ser 35.
 */ 

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.age = 35;
console.log(student);

/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */

    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    student.pet = "dog";
    console.log(student);

/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
// const objeto = {}
Object.defineProperties(objeto, {
    color: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "rojo"
    },
    tamaño: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "Grande"
    },
    peso: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 70
    },
    cantidad: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 10
    },
});

console.log(objeto);

/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

function agregarPropiedad(objeto, cadena){
    if (objeto.hasOwnProperty(cadena)) {
        return true
    }else{
        objeto[cadena] = "";
    }
}

const objeto = {};
agregarPropiedad(objeto, "Hola");
console.log(objeto);


/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}

myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/

let objeto2 = {
    llenar : function(){
        Object.defineProperties(objeto2, {
            color: {
                configurable: true,
                enumerable: true,
                writable: true,
                value: "rojo"
            },
            cantidad: {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 10
            }
        });
    }
};

console.log(objeto2);
objeto2.llenar();
console.log(objeto2);




/*var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así:
//     ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/


var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

function unirObjeto(arreglo){
    let cadena = [];
    let index = 0;
    arreglo.forEach(element => {
       cadena[index]  = (element.a + element.b) + " " + element.name;
       index++;
    });

    return cadena.join("-=-");
}

console.log(unirObjeto(simpleExercise));