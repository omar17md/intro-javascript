// Ejercicio 4-4

let inicio = Number(prompt("Ingrese el inicio del rango"));
let fin = Number(prompt("Ingrese el fin del rango"));



if (fin - inicio == 10) {
  for (let i = 1; i <= 100; i++) {
    if (i < inicio || i > fin) {
      console.log(i);
    }
  }
} else {
  console.log("El rango debe de ser de tamaño 10");
}