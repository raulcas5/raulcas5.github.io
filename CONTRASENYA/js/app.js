let caracteres="abcdefghijklmnñopqrstuvwxyz"
let caracteresMayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let caracteresNumeros="0123456789"
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

