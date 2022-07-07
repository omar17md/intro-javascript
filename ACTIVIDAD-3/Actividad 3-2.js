// Ejercicio 3-2

let jugador1 = prompt("Escribe tu movimiento");
let jugador2 = prompt("Escribe tu movimiento");


if (jugador1 == jugador2) {
  console.log("Hubo un empate");
} else {
  switch (jugador1) {
    case "Piedra": {
      if (jugador2 == "Tijera") {
        console.log("Gano el jugador 1");
      } else if (jugador2) {
        console.log("Gano el jugador 2");
      }
    }
    break;

  case "Papel": {
    if (jugador2 == "Piedra") {
      console.log("Gano el jugador 1");
    } else if (jugador2) {
      console.log("Gano el jugador 2");
    }
  }
  break;

  case "Tijera": {
    if (jugador2 == "Papel") {
      console.log("Gano el jugador 1");
    } else if (jugador2) {
      console.log("Gano el jugador 2");
    }
  }
  break;
  }
}