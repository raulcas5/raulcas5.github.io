// 5. Recorrer un array de nombres

let clase = ["carlos", "juan", "aliou", "antonio", "alvaro"];
for (let i =0;i < clase.length;i++) {
    console.log(clase[i]);
}
// Recorrer con for...of
for (let nombre of clase) {
    console.log(nombre);
}