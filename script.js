console.log("O JavaScript está funcionando!");

function mostrarDetalhes() {

    let area = document.getElementById("detalhes");
    let botao = document.getElementById("botaoDetalhes");

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Seu IMC é: <span style='color:rgb(0, 0, 0); font-weight:bold'>" + imc.toFixed(2) + "</span>";

    if(area.style.display === "none") {

        area.style.display = "block";
        botao.innerText = "Ocultar detalhes da avaliação";

    } else {

        area.style.display = "none";
        botao.innerText = "Ver detalhes da avaliação";

    }


}