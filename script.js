function comentar() {
    //capturamos el valor del input
    const input = document.queryselector("input").value
    //crear  un <p> con el valor del input
    document.querySelector(".comentarios").innerHTML = input

}