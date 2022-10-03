/*Pedirle números al usuario hasta que el usuario aprete el botón de cancelar.
Verificar que lo ingresado por el usuario sea un número válido (avisar por alert si no lo es).
Al apretar cancelar, se deben mostrar todos los números juntos.*/

let number = true;
let outcome = '';

while (number!=null){
number = prompt('Ingresa un número por favor')

if (isNaN(number)){
    alert('No es un número válido');
    }else{
    outcome = outcome + number;
    }
}