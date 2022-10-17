// Armar un piedra papel o tijeras, donde el jugador juegue contra un bot.
const playmode = ["piedra", "papel" , "tijeras"]

function userplay () {
let move = prompt ("Piedra, Papel o Tijeras") .toLowerCase() .trim();
    if ( move != piedra || move != papel || move != tijeras) {
alert("Ingresá una jugada válida")
}
return move;
}

function botplay () {
let move= Math.floor (Math.random() *2.99)
return playmode [move]

}

function game (userplay){
const bot = botplay ()
switch (true){

    case userplay === botplay:
    alert (`El bot jugo ${botplay}, Empate`);
    break;
    case userplay === "piedra" && bot === "papel":
    alert (`El bot jugo papel, Ganó el bot`);
    break;
    case userplay === "papel" && bot === "piedra":
    alert (`El bot jugo piedra, Ganaste`);
    break;
    case userplay === "piedra" && bot=== "tijeras":
    alert (`El bot jugo tijeras, Ganaste`);
    break;
    case userplay === "papel" && bot=== "tijeras":
    alert (`El bot jugo tijeras, Ganó el bot`);
    break;
    case userplay === "tijeras" && bot=== "papel":
    alert (`El bot jugo papel, Ganaste`);
    break;
    case userplay === "tijeras" && bot=== "piedra":
    alert (`El bot jugo piedra, Ganó el bot`);
    break;

} 


}
