// Ejercicio 4-2

let numero = Number(prompt("Ingrese un numero"));
let i = 1;

do {
  if (i % 5 == 0) {
    console.log(`El numero ${i} es multiplo de 5`);
  }
  i++;
} while (i <= numero);
