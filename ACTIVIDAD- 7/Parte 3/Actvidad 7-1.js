// Ejercicio 7-1

function multiply(a, b){
    if(arguments.length == 2){
        return a * b;
    }else{
        return multiply2;
    }

    function multiply2(c){
        return c * a;
    }
}

// let fun = multiply(12, 2);
// console.log(fun);

let fun = multiply(12);
let res = fun(2);
console.log(res);

