console.log("O JavaScript está funcionando!");

// ===== INTERAÇÃO 1: Mostrar texto =====
const botao = document.querySelector("#botao");
const texto = document.querySelector("#texto");

if (botao && texto) {
    botao.addEventListener("click", function() {
        if (texto.style.display === "none" || texto.style.display === "") {
            texto.style.display = "block";
            botao.innerText = "Mostrar menos";
        } else {
            texto.style.display = "none";
            botao.innerText = "Saiba mais";
        }
    });
}


// ===== INTERAÇÃO 2: IMC =====
const botaoDetalhes = document.getElementById("botaoDetalhes");
const area = document.getElementById("detalhes");
const resultado = document.getElementById("resultado");

if (botaoDetalhes && area && resultado) {
    botaoDetalhes.addEventListener("click", function() {

        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            resultado.innerHTML = "Por favor, preencha peso e altura corretamente.";
            area.style.display = "block";
            return;
        }

        let imc = peso / (altura * altura);

        let mensagem = "";
        let cor = "";

        if (imc < 18.5) {
            mensagem = "Abaixo do peso";
            cor = "blue";
        } else if (imc < 25) {
            mensagem = "Peso normal";
            cor = "green";
        } else if (imc < 30) {
            mensagem = "Sobrepeso";
            cor = "orange";
        } else {
            mensagem = "Obesidade";
            cor = "red";
        }

        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> ${mensagem}`;
        resultado.style.color = cor;
        area.style.display = "block";
    });
}


// ===== INTERAÇÃO 3: Seleção de Protocolo =====
function selecionar(protocolo) {
    alert("Protocolo selecionado: " + protocolo);
    console.log("Protocolo ativo:", protocolo);
}

let tamanho = 120;

botaoFugitivo.addEventListener("mouseover", function() {
    tentativas++;

    //  DIMINUI
    tamanho -= 8;
    if (tamanho < 30) tamanho = 30;

    botaoFugitivo.style.width = tamanho + "px";

    //  GIRA
    botaoFugitivo.style.transform = `rotate(${tentativas * 25}deg)`;

    //  FOGE
    const maxX = areaBotao.offsetWidth - botaoFugitivo.offsetWidth - 10;
    const maxY = areaBotao.offsetHeight - botaoFugitivo.offsetHeight - 10;

    const novoX = Math.floor(Math.random() * maxX);
    const novoY = Math.floor(Math.random() * maxY);

    botaoFugitivo.style.left = novoX + "px";
    botaoFugitivo.style.top = novoY + "px";

    //  SOME E VOLTA
    botaoFugitivo.style.opacity = "0";

    setTimeout(() => {
        botaoFugitivo.style.opacity = "1";
    }, 300);

    // TEXTO
    botaoFugitivo.innerText = `Clique aqui! (${tentativas})`;

    console.log("Boa sorte 😈 Tentativas:", tentativas);
});