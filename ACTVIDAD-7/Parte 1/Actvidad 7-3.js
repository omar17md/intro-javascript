// Ejercicio 7-3

let verificaPalindromo = a => a.split("").reverse().join("") == a ? true : false;

console.log(verificaPalindromo("madam"));
console.log(verificaPalindromo("computadora"));