let btnInicio = document.querySelector('#inicio');
let player1 = document.querySelector('#jugador1');
let player2 = document.querySelector('#jugador2');
let player3 = document.querySelector('#jugador3');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;

btnInicio.addEventListener('click', () => {

    btnInicio.style.visibility = 'hidden';
    let intervalo = setInterval(carrera, 100);

    function carrera() {
        pos1 += Math.round(Math.random() * 20);
        player1.style.left = `${pos1}px`;

        pos2 += Math.round(Math.random() * 20);
        player2.style.left = `${pos2}px`;

        pos3 += Math.round(Math.random() * 20);
        player3.style.left = `${pos3}px`;

        if (pos1 >= 646) {
            clearInterval(intervalo);
            reiniciar();
            alert('Gano el rojo');

        } else if (pos2 >= 646) {
            clearInterval(intervalo);
            reiniciar();
            alert('Gano el azul');
        } else if (pos3 >= 646) {
            clearInterval(intervalo);
            reiniciar();
            alert('Gano el amarrillo');
        }
    }

});


function reiniciar(){
    btnInicio.style.visibility = 'visible';
    player1.style.left = `0px`;
    player2.style.left = `0px`;
    player3.style.left = `0px`;
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
}