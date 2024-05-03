let jogador1 = localStorage.getItem("j1");
let jogador2 = localStorage.getItem("j2");

let pontosj1 = 0;
let pontosj2 = 0;

document.getElementById("nomeJogador1").innerHTML = jogador1 + " : ";
document.getElementById("nomeJogador2").innerHTML = jogador2 + " : ";

document.getElementById("pontosJogador1").innerHTML = pontosj1;
document.getElementById("pontosJogador2").innerHTML = pontosj2;


function enviar() {

    palavra = document.getElementById("n1").value;
    gabarito = palavra.toLowerCase();
    caracter1 = palavra.charAt(1);
    comprimentodividido2 = Math.floor(palavra.length / 2);
    caracter2 = palavra.charAt(comprimentodividido2);
    comprimento1 = palavra.length - 1;
    caracter3 = palavra.charAt(comprimento1);

    removerCaracter1 = palavra.replace(caracter1, " _ ");
    removerCaracter2 = removerCaracter1.replace(caracter2, " _ ");
    removerCaracter3 = removerCaracter2.replace(caracter3, " _ ");

    questao = "<h4>" + removerCaracter3 + "</h4>";
    resp_usuario = "<br> Resposta: <input type='text' id='resp' >";

    botao_checar = "<br><br><button onclick='check()'>Verificar</button>";

    linha = questao + resp_usuario + botao_checar;
    document.getElementById("output").innerHTML = linha;
    document.getElementById("n1").value = "";
}


turno_pergunta = "jogador1";
turno_resposta = "jogador2";



function check() {

    resp = document.getElementById("resp").value;
    resp_toLower = resp.toLowerCase();
    if (gabarito == resp_toLower) {
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

