const age = prompt ("Cuántos años tenés?")

switch (true) {

    case age > 0 && age <= 10:
        console.log("Maria Elena Walsh, Manuelita");
        break

    case age > 10 && age <=20:
        console.log("Lali, Ego");
        break

    case age > 20 && age <=30:
        console.log("Callejeros, Prohibido");
        break
    
    case age > 30 && age <= 40:
        console.log("Soda Stereo, Zoom");
        break

    case age > 40 && age <=50:
        console.log("Vilma Palma, Auto Rojo");
        break

    default:
    console.log("No entendés nada");
    break


}