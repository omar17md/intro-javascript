let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operador = document.getElementById("operador");
let igualPantalla = document.getElementById("igualPantalla");
let resultado = document.getElementById("resultado");
let operacion = "";
let dosNumeros = false;

function reiniciarPantalla(){ 
    numero1.style.visibility = "hidden";
    numero2.style.visibility = "hidden";
    operador.style.visibility = "hidden";
    igualPantalla.style.visibility = "hidden";
    resultado.style.visibility = "hidden";

    numero1.innerText = "";
    numero2.innerText = "";
    operador.innerText = "";
    resultado.innerText = "";
    dosNumeros = false;
}

function agregarComa(){
    if(!dosNumeros){
        numero1.innerText += '.';
    }else{
        numero2.innerText += '.';
    }
}

function recibir(tecla){
    if(!dosNumeros){
        numero1.innerText += tecla;
    }else{
        numero2.innerText += tecla;
    }
}

function recibirOperacion(opr){
    if(!dosNumeros){
        operador.innerText = opr;
        operador.style.visibility = "visible";
        dosNumeros = true;
    }
}

function mostrar(){
    if(numero1.style.visibility == "hidden"){
        numero1.style.visibility = "visible";
    }else if(dosNumeros){
        numero2.style.visibility = "visible";
    }
}

function calcular(){
    if(dosNumeros){
        igualPantalla.style.visibility = "visible";
        resultado.style.visibility = "visible";

        switch(operador.textContent){
            case "/":{
                resultado.innerText = Number(numero1.textContent) / Number(numero2.textContent);
            }break;

            case "X":{
                resultado.innerText = Number(numero1.textContent) * Number(numero2.textContent);
            }break;

            case "-":{
                resultado.innerText = Number(numero1.textContent) - Number(numero2.textContent);
            }break;

            case "+":{
                resultado.innerText = Number(numero1.textContent) + Number(numero2.textContent);
            }break;
        }
    }
}



reiniciarPantalla();