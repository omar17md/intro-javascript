// Ejercicio 3-1

edad = prompt("Ingrese su edad");
nombre = prompt("Ingrese su nombre");

if (edad >= 18) {
  if (nombre == "Mario" || nombre == "Carlos") {
    console.log("Puedes ingresar a la discoteca y zona VIP");
  } else {
    console.log("Puedes ingresar a la discoteca");
  }
} else {
  console.log("No puedes ingresar a la discoteca");
}