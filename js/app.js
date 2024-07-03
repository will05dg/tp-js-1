//de hexadecimal a rgb

function hexavalue(caracter){
    if (caracter == "0") {
        return 0;
    }
    if (caracter == "1") {
        return 1;
    }
    if (caracter == "2") {
        return 2;
    }
    if (caracter == "3") {
        return 3;
    }
    if (caracter == "4") {
        return 4;
    }    
    if (caracter == "5") {
        return 5;
    }    
    if (caracter == "6") {
        return 6;
    }    
    if (caracter == "7") {
        return 7;
    }    
    if (caracter == "8") {
        return 8;
    }   
    if (caracter == "9") {
        return 9;
    }
    if (caracter == "A") {
        return 10;
    }
    if (caracter == "B") {
        return 11;
    }
    if (caracter == "C") {
        return 12;
    }
    if (caracter == "D") {
        return 13;
    }
    if (caracter == "E") {
        return 14;
    }
    if (caracter == "F") {
        return 15;
    }
}

// de rgb a exadecimal

function numerovalue(numeros){
    if (numeros == 0) {
        return "0";
    }
    if (numeros == 1) {
        return "1";
    }
    if (numeros == 1) {
        return "2";
    }
    if (numeros == 3) {
        return "3";
    }
    if (numeros == 4) {
        return "4";
    }    
    if (numeros == 5) {
        return "5";
    }    
    if (numeros ==6) {
        return "6";
    }    
    if (numeros == 7) {
        return "7";
    }    
    if (numeros == 8) {
        return "8";
    }   
    if (numeros == 9) {
        return "9";
    }
    if (numeros == 10) {
        return "A";
    }
    if (numeros == 11) {
        return "B";
    }
    if (numeros == 12) {
        return "C";
    }
    if (numeros == 13) {
        return "D";
    }
    if (numeros == 14) {
        return "E";
    }
    if (numeros == 15) {
        return "F";
    }
}

let opcion= prompt ("Oprime 1 si quieres pasar un archivo hexadecimal a rgb \n Oprime 2 si quieres pasar un rgb a hexadecimal ")


if (opcion == 1) {
    //de hexadecimal a rgb

    let  hexadecimal = prompt('ingrese un color hexadecimal').toUpperCase()

    if (hexadecimal.length != 6) {
        alert ('el numero hexadecimal no es corecto')
    } else {
        conv=""

        for (let i = 0 ; i < 3 ; i++) {
            rgb = hexavalue (hexadecimal[2*i])*16 + hexavalue (hexadecimal[2*i+1]);
            
            if (i<2){
                conv=conv+rgb+","
            } else {
                conv=conv+rgb
            }
        }
    
        alert(`el numero hexadecimal # ${hexadecimal} es en rgb: ${conv}`);
    }
    
}

if (opcion == 2) {
    // de rgb a exadecimal

    let  r = parseInt (prompt('ingrese un color R de 0 a 255'));
    let  g = parseInt (prompt('ingrese un color G de 0 a 255'));
    let  b = parseInt (prompt('ingrese un color B de 0 a 255'));


    if (0 > r || r > 255 || 0 > g || g > 255 || 0 > b || b > 255) {
        alert ('`el numero RGB no es corecto')
    } else {
        console.log(r);
        console.log(g);
        console.log(b);
    
        console.log(parseInt(r/16))
        let hexR= numerovalue (parseInt(r/16))  + numerovalue (r%16);
        let hexG= numerovalue (parseInt(g/16))  + numerovalue (g%16);
        let hexB= numerovalue (parseInt(b/16))  + numerovalue (b%16);
    
    
        alert(`el numero RGB: ${r} ${g} ${b} es en # ${hexR}${hexG}${hexB}`);
    }
} 







