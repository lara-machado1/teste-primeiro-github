// ===== controller.js — Ponte entre o HTML e o Banco =====

// Inicia o banco assim que a página carrega
document.addEventListener("DOMContentLoaded", async function() {
    await iniciarBanco();
    console.log("Controller pronto!");
    await listarAlunos();
});

// ===== FORMULÁRIO DE CADASTRO =====
const form = document.getElementById("formCadastro");

if (form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const aluno = {
            nome: document.getElementById("nome").value,
            nascimento: document.getElementById("nasc").value,
            tipoDV: document.getElementById("tipoDV").value,
            tipoSD: document.getElementById("tipoSD").value,
            doencas: document.getElementById("doencas").value,
        };

        await adicionarItem(aluno);
        alert("Aluno salvo com sucesso!");

        form.reset();
        await listarAlunos();
    });
}

// ===== LISTAGEM DE ALUNOS =====
async function listarAlunos() {
    const alunos = await buscarItens();
    
    let lista = document.getElementById("listaAlunos");
    if (!lista) {
        lista = document.createElement("div");
        lista.id = "listaAlunos";
        lista.style.marginTop = "20px";
        document.querySelector("main").appendChild(lista);
    }

    if (alunos.length === 0) {
        lista.innerHTML = "<p style='color: var(--texto-secundario)'>Nenhum aluno cadastrado ainda.</p>";
        return;
    }

    lista.innerHTML = `
        <h3 style="color: var(--turquesa); margin-top: 40px;">Alunos Cadastrados (${alunos.length})</h3>
        ${alunos.map(a => `
            <div style="background: var(--card-grafite); border: 1px solid var(--borda); border-radius: 8px; padding: 15px; margin-top: 10px;">
                <strong style="color: white">${a.nome}</strong><br>
                <span style="color: var(--texto-secundario)">Nascimento: ${a.nascimento}</span><br>
                <span style="color: var(--texto-secundario)">BAF-DV: ${a.tipoDV || "Não se aplica"} | PRODOWN: ${a.tipoSD || "Não se aplica"}</span><br>
                <button onclick="deletarItem(${a.id}).then(listarAlunos)" 
                    style="margin-top: 8px; background: transparent; border: 1px solid red; color: red; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                    Remover
                </button>
            </div>
        `).join("")}
    `;
}

// ===== A PIOR INTERFACE DE DATA DO MUNDO =====
const botaoFugitivo = document.getElementById("botaoFugitivo");
const areaData = document.getElementById("area-data");
const areaBotao = document.getElementById("area-botao");

let tentativas = 0;

if (botaoFugitivo) {

    // Botão foge quando o mouse passa por cima
    botaoFugitivo.addEventListener("mouseover", function() {
        tentativas++;

        const maxX = areaBotao.offsetWidth - botaoFugitivo.offsetWidth - 10;
        const maxY = areaBotao.offsetHeight - botaoFugitivo.offsetHeight - 10;

        const novoX = Math.floor(Math.random() * maxX);
        const novoY = Math.floor(Math.random() * maxY);

        botaoFugitivo.style.left = novoX + "px";
        botaoFugitivo.style.top = novoY + "px";

        botaoFugitivo.innerText = `Clique aqui! (tentativa ${tentativas})`;
        console.log("O botão fugiu! Tentativas:", tentativas);
    });

    // Quando clicar, libera o campo de data
    botaoFugitivo.addEventListener("click", function() {
        botaoFugitivo.style.display = "none";
        areaData.style.display = "block";
        console.log("Usuário conseguiu clicar após", tentativas, "tentativas!");
    });
}

// ===== SALVAR DATA NO INDEXEDDB =====
const btnSalvarData = document.getElementById("btnSalvarData");
const resultadoData = document.getElementById("resultadoData");

if (btnSalvarData) {
    btnSalvarData.addEventListener("click", async function() {
        const data = document.getElementById("dataCaos").value;

        if (!data) {
            resultadoData.innerHTML = "<p style='color: red;'>Por favor, selecione uma data!</p>";
            return;
        }

        const objeto = {
            tipo: "data-caos",
            dataNascimento: data,
            tentativas: tentativas,
            timestamp: new Date().toLocaleString()
        };

        await adicionarItem(objeto);

        resultadoData.innerHTML = `
            <p style="color: green; font-weight: 600;">
                ✅ Data salva com sucesso!<br>
                <span style="color: var(--texto-secundario); font-size: 0.9rem;">
                    Data: ${data} | Tentativas para clicar: ${tentativas}
                </span>
            </p>
        `;

        console.log("Data salva no IndexedDB:", objeto);
    });
}