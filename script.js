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

        // Validação melhor
        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            resultado.innerHTML = "Por favor, preencha peso e altura corretamente.";
            area.style.display = "block"; // mostra a área mesmo com erro
            return;
        }

        let imc = peso / (altura * altura);

        let mensagem = "";
        let cor = "";

        // Classificação do IMC
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

        // Mostrar resultado
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> ${mensagem}`;
        resultado.style.color = cor;

        // MOSTRAR RESULTADO
        area.style.display = "block";

    });
} 