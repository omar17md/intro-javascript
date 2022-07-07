// Ejercicio 4-1

let numero = Number(prompt("Ingrese un numero"));
let i = 1;

while (i <= numero) {
  if (i % 5 == 0) {
    console.log(`El numero ${i} es multiplo de 5`);
  }
  i++;
}
