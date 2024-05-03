function matematica() {
    let jogador1 = document.getElementById("jogador1").value
    let jogador2 = document.getElementById("jogador2").value

    localStorage.setItem("j1", jogador1);
    localStorage.setItem("j2", jogador2);

    window.location = "matematica.html";
}

function portugues() {
    let jogador1 = document.getElementById("jogador1").value
    let jogador2 = document.getElementById("jogador2").value

    localStorage.setItem("j1", jogador1);
    localStorage.setItem("j2", jogador2);

    window.location = "portugues.html";
}
