// 4. Cuenta atrás
run.addEventListener("click", (e) => {
    let n = prompt("Introduce un número");

    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
});