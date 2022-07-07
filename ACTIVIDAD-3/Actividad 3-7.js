// Ejercicio 3-7

let num1 = Number(prompt("Ingrese el numero 1"));
let num2 = Number(prompt("Ingrese el numero 2"));
let num3 = Number(prompt("Ingrese el numero 3"));

if (num1 > num2 && num1 > num3) {
  console.log("El numero mayor es: ", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("El numero mayor es: ", num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("El numero mayor es: ", num3);
} else if (num1 == num2 && num1 > num3) {
  console.log("Hay dos numeros mayores: " + num1 + " y " +
    num2);
} else if (num2 == num3 && num2 > num1) {
  console.log("Hay dos numeros mayores: " + num2 + " y " +
    num3);
} else if (num3 == num1 && num3 > num2) {
  console.log("Hay dos numeros mayores: " + num3 + " y " +
    num1);
}