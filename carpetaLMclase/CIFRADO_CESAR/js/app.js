



// for (let i=0;i<frase.length;i++){
//     console.log(frase[i]+"=>"+letras2[letras2.indexOf
//     (frase[i])+paso])
    
    
// }

let abece="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase="HOLA"
let paso=(3)

// console.log(frase[0]) //c
// console.log(frase[3]) //a


// for (i=0;i<frase.length;i++) {
//     console.log("Voy a buscar la letra: " + frase[i])
//     let posicion=abece.indexOf(frase[i])
//     console.log("Está en la posicion: "+ posicion)
//     // devuelve la nueva letra será posición +paso
//     let nuevaPosicion=posicion+paso
//     let nuevaLetra=abece[nuevaPosicion]
//     console.log("Su nuevaLetra es : "+nuevaLetra)

// }
let nuevaFrase=""
for (i=0;i<frase.length;i++) {
    // console.log("Voy a buscar la letra: " + frase[i])
     let posicion=abece.indexOf(frase[i])
    //  console.log(posicion)
     let nuevaLetra=abece[posicion+paso]
     nuevaFrase=nuevaFrase+nuevaLetra
}
    console.log(frase + " es : "+ nuevaFrase)

// let abece="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
// let frase="ROJO"
// let paso=3


// let nuevaFrase=""
// for (i=0;i<frase.length;i++){
//     let posicion=abece.indexOf(frase[i])
//     let nuevaFrase=abece[posiciojn+paso]
//     nuevaFrase=nuevaFrase+nuevaLetra


// }
// console.log(frase + "es: "+nuevaFrase )
