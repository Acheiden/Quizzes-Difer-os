let jogador1 = localStorage.getItem("j1");
let jogador2 = localStorage.getItem("j2");

let pontosj1 = 0;
let pontosj2 = 0;

document.getElementById("nomeJogador1").innerHTML = jogador1 + " : ";
document.getElementById("nomeJogador2").innerHTML = jogador2 + " : ";

document.getElementById("pontosJogador1").innerHTML = pontosj1;
document.getElementById("pontosJogador2").innerHTML = pontosj2;

function enviar() {

    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    gabarito = parseInt(numero1) * parseInt(numero2);

    questao = "<h4>" + numero1 + " x " + numero2 + "</h4>";
    resp_usuario = "<br> Resposta: <input type='number' id='resp' >";

    botao_checar = "<br><br><button onclick='check()'>Verificar</button>";

    linha = questao + resp_usuario + botao_checar;
    document.getElementById("output").innerHTML = linha;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}


turno_pergunta = "jogador1";
turno_resposta = "jogador2";



function check() {

    resp = document.getElementById("resp").value;
    if (gabarito == resp) {
        if (turno_resposta == "jogador1") {
            pontosj1 = pontosj1 + 1;
            document.getElementById("pontosJogador1").innerHTML = pontosj1;
        } else {


            pontosj2 = pontosj2 + 1;
            document.getElementById("pontosJogador2").innerHTML = pontosj2;
        }
    }

    if (turno_pergunta == "jogador1") {
        turno_pergunta = "jogador2";
        document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador2;
    } else {
        turno_pergunta = "jogador1"
        document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador1;
    }


    if (turno_resposta == "jogador1") {
        turno_resposta = "jogador2";
        document.getElementById("resposta").innerHTML = "Turno de resposta - " + jogador2;
    } else {
        turno_resposta = "jogador1"
        document.getElementById("resposta").innerHTML = "Turno de resposta - " + jogador1;
    }

    document.getElementById("output").innerHTML = "";

}

