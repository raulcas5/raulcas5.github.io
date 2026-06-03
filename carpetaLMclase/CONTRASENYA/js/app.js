let caracteres="abcdefghijklmnñopqrstuvwxyz"
let caracteresMayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let caracteresNumeros="0123456789"
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";


// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dameLetras(min,max,name){
    let cuantosCaracteres=numeroAleatorio(1,2)
    for (let i=0; i<cuantosCaracteres;i++){
        let posicion=numeroAleatorio(0,caracteresNumeros.length-1)
        password+=caracteresNumeros[posicion]
    }
    console.log(password)
}
function dameNumero(){
    let cuantosCaracteres=numeroAleatorio(min,max)
    for (let i=0; i<cuantosCaracteres;i++){
        let posicion=numeroAleatorio(0,caracteresNumeros.length-1)
        password+=caracteresNumeros[posicion]
    }
    console.log(password)
}
dameNumero(caracteresNumeros)
dameEspeciales(caracteresEspeciales)
dameMayusculas(caracteresMayusculas)
dameCaracteres(caracteres)

let resto=50-password.length
dameLetras()





// // num aleatorio
// let num=numeroAleatorio(0,9)
// // kletra aleatoria
// let letraEspecial=caracteresEspeciales[numeroAleatorio(0,31)]
// // mayus aletoria
// let letraMayuscula=caracteresMayusculas[numeroAleatorio(0,27)]
// // letra normal
// let letra=caracteres[numeroAleatorio(0,27)]
// password=num+letraEspecial+letraMayuscula+letra

//desordenar array
password = password.split('').sort(() => Math.random() - 0.5).join('');


console.log(password)

