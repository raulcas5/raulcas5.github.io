//  // variables
//  let numero=document.getElementById("numero1")
//   let numero2=document.getElementById("numero2")

//  let solucion=document.getElementById("solucion")

// let run=document.getElementById("run")

// function multiplica(a,b){
//      let solucionn=a * b
//      console.log(solucionn)
//      return solucionn
// }

// let mul=multiplica(10,20)
// console.log("La multiplicación es "+mul)





//  run.addEventListener("click", (e) => {
//      solucion.innerHTML=numero.value *2

     
// })

// run.addEventListener("click", (e) => {
//      let num=(numero2.value) 
//      console.log(num)

     
// })
// run.addEventListener("click", (e) => {
//      let num=(numero.value) * (numero2.value)
//      console.log(num)

     
// })
// run.addEventListener("click", (e) => {
//      let num=(numero.value)
//      let num2=(numero2.value)
//      let cadenaTotal=""
//      let sol= parseInt(num) + parseInt(num2)
//      console.log(sol) 
//      solucion.innerHTML=sol
//      for (i=0;i<(num2);i++) {
//           cadenaTotal=cadenaTotal+num+"<BR>"
//           console.log("I vale:"+i+": "+num)
//      }

//      solucion.innerHTML=cadenaTotal

     

     
// })

// // otra forma 

// //  run.addEventListener("click", (e) => {
// //      solucion.innerHTML=(numero.value) * (numero2.value)
     
// // })






//  solucion.innerHTML=("Hola")

//  console.log("Estoy en el javascript:"+numero.value)



// contraseña
let caracteres="abcdefghijklmnñopqrstuvwxyz"
let caracteresMayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let caracteresNumeros="0123456789"
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
let password=""


// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dameLetras(min,max,caracteres){
    let cuantosCaracteres=numeroAleatorio(1,2)
    for (let i=0; i<cuantosCaracteres;i++){
        let posicion=numeroAleatorio(0,caracteresNumeros.length-1)
        password+=caracteresNumeros[posicion]
    }
    
}
function dameNumero(){
    let cuantosCaracteres=numeroAleatorio(1,2)
    for (let i=0; i<cuantosCaracteres;i++){
        let posicion=numeroAleatorio(0,caracteresNumeros.length-1)
        password+=caracteresNumeros[posicion]
    }
    
}
function dameEspeciales(){
    let cuantosCaracteres=numeroAleatorio(1,2)
    for (let i=0; i<cuantosCaracteres;i++){
        let posicion=numeroAleatorio(0,caracteresNumeros.length-1)
        password+=caracteresNumeros[posicion]
    }
    
}
dameNumero(1,2,caracteresNumeros)
dameEspeciales(caracteresEspeciales)
dameMayusculas(caracteresMayusculas)
dameCaracteres(caracteres)

let resto=50-password.length
dameLetras(1,resto,caracteres)

password = password.split('').sort(() => Math.random() - 0.5).join('');


console.log(password)