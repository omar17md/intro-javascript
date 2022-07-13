// Ejercicio 7-6


function conversionTemperatura(temperatura, tipo){
    return tipo ? temperatura * 1.8 + 32 : (temperatura - 32) / 1.8;
}

console.log(`La conversion de 30 celsius a fahrenheit es: ${conversionTemperatura(30, true)}`);
console.log(`La conversion de 30 fahrenheit a celsius es: ${conversionTemperatura(30, false)}`);