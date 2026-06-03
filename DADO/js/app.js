/* Genera una página web que responda en console.
El ejercicio consiste en que tienes una función que acepta como parámetro el número de
caras del dado y devuelve un número aleatorio entre 1 y ese número. Usa console para
informar del resultado.
Para números aleatorios puedes usar:
Math.floor(Math.random() * max) + 1; */


function dameNumero(){
    let max=6
    let numero = Math.floor(Math.random() * max) + 1; console.log(numero) 
}

dameNumero()

// dado aletaorio

function dadito(){
    let max=6
    let numero=Math.floor(Math.random() * max) + 1; console.log(numero)
}
dadito()

// primitiva
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

//cifrado cesar
let abece="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase="AMOR"
let paso=(3)

let nuevaFrase=""
for (i=0;i<frase.length;i++) {
    // buscar la letra
    let posicion=abece.indexOf(frase[i])
    //  console.log(posicion)
    let nuevaLetra=abece[posicion+paso]
    nuevaFrase=nuevaFrase+nuevaLetra
}

console.log(frase + " es : "+ nuevaFrase)


// generador de constraseñas

let caracteres = "abcdefghijklmnopqrstuvwxyz";
 let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let caracteresNumeros = "0123456789";
 let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

 // devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// num aleatorio
let num=numeroAleatorio(0,9)
// kletra aleatoria
let letraEspecial=caracteresEspeciales[numeroAleatorio(0,31)]
// mayus aletoria
let letraMayuscula=caracteresMayusculas[numeroAleatorio(0,27)]
// letra normal
let letra=caracteres[numeroAleatorio(0,27)]
password=num+letraEspecial+letraMayuscula+letra




//desordenar array
 password = password.split('').sort(() => Math.random() - 0.5).join('');

 console.log(password)
