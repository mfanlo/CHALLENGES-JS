/*El usuario ingresa un DNI. Comprobar que sea válido, es decir, 
que tenga 7 u 8 dígitos y que no sea todos ceros*/

const dniUser = () =>{
    let dni = prompt("ingresá tu dni");
    if (isNaN (dni) || dni === 0 || dni.length > 8 || dni.length < 7) {
    alert ("El numero que ingresó no es válido")
}else{
alert (`Su número de documento es ${dni}`)
}
}

