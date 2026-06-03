// 6.contar elementos mayor qe x

let numeros = [3, 7, 12, 5, 20, 8];
let x = prompt("Introduce un número");
let contador = 0;

for (let num of numeros) {
    if (num > x) {
        contador++;
    }
}

console.log("Cantidad de números mayores que " + x + ": " + contador);