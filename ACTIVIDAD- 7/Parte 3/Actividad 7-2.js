// Ejercicio 7-1

function fibonacci(tam, num1, num2){
    if(tam==0)
    {
        return 1;
    }
    console.log(num1+num2 + ", ");
    
    return fibonacci(tam-1, num2, num2+num1);
}

console.log("0");
console.log("1");
fibonacci(6-2, 0, 1);
