// Ejercicio Bonus

let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 999);

while (true) {
  var respuesta = Number(prompt(`¿Cual es el resultado de multiplicar ${num1} X ${num2}?`));

  if (respuesta == num1 * num2) {
    console.log("GANASTE");
    break;
  }

  num1 = Math.ceil(Math.random() * 9);
  num2 = Math.ceil(Math.random() * 999);
}