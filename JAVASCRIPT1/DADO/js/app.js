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