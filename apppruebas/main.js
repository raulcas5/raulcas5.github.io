function contarRango (num1,num2){
    // 1 2 3 4 5 = 5-2 =3
    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2;

    return max - min -1
}
// codigo prueba
console.log(contarRango(1, 9))
console.log(contarRango(1332, 8743))
console.log(contarRango(5,6))