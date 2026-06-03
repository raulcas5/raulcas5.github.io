/*console.log("Hola mundo")
console.log("ADIOS")
console.warn("Ojo!")
console.error("Lo has roto!")
*/

/* Imprime en pantalla un numero aleatorio */
function dameNumero(max){
    
    let numero=Math.floor(Math.random() * max) + 1
    return numero

}

//let veces=1
let numeros=[]
let aqui=document.getElementById("solucion")

while(numeros.length<6){
    let variable=dameNumero(49)
    let posicion=numeros.indexOf(variable)
    if (posicion>-1){
        console.log(variable +" Ya estaba en la posicion: " + posicion)
    }

    else numeros.push(variable)
    
    
}
console.log(numeros)
aqui.innerHTML=numeros





// let nombre= "Basilisco"
// let curso="ASIR"
// let edad = 20


// for(num=1;num<=100;num++){
//     console.log(num)
// }



// while (num<=10) {
//     console.log(num)
//     num++
// }




/*
if (edad > 17) {
    console.log("Puede beber")
    console.log("Puede ir a la discotecta")
    console.log("Puede tomar cafe")
}
else {
    if (edad > 12) {
        console.log("Puedo tomar café")
    }
    console.log("NO Puede beber")
}

cadena = edad > 17 ? "Puedes beber." : "No puedes beber.";
console.log(cadena)
*/



/*console.log("Te llamas: " + nombre+ " y cursas: "+curso+" y tienes "+edad+ " años")
nombre="Julieta"
curso="DAW"
edad+=10

console.log("Te llamas: " + nombre+ " y cursas: "+curso+" y tienes "+edad+ " años")
*/