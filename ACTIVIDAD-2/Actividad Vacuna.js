let edad = 20;
let municipio = "";
let embarazada =  false;
let semanasGestacion = 10;
let fechaNacimiento = new Date(1980, 02, 15);
let hoy = new Date();
var edadActual = hoy.getFullYear() - fechaNacimiento.getFullYear();


if (edad > 18 && municipio == "Ensenada" ){
    console.log("Te puedes vacunar");
} else if ( embarazada && edad > 18 && semanasGestacion > 9){
    console.log("Te puedes vacunar");
} else if(edadActual >= 30){
    console.log("Te puedes vacunar");
}