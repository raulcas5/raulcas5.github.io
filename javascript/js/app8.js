// 8. Contar vocales en un texto// 8. Contar vocales en un texto
let texto = "Javascript es genial";
let contadores = 0;
let vocales = "aeiouAEIOU";

for (let letra of texto) {
    if (vocales.includes(letra)) {
        contadores++;
    }
}

console.log("Número de vocales: " + contadores);