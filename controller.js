// ===== controller.js — Ponte entre o HTML e o Banco =====

// Inicia o banco assim que a página carrega
document.addEventListener("DOMContentLoaded", async function() {
    await iniciarBanco();
    console.log("Controller pronto!");
    await listarAlunos(); // já lista os alunos salvos ao abrir a página
});

// Escuta o envio do formulário de cadastro
const form = document.getElementById("formCadastro");

if (form) {
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // impede o recarregamento da página

        // Captura os dados do formulário
        const aluno = {
            nome: document.getElementById("nome").value,
            nascimento: document.getElementById("nasc").value,
            tipoDV: document.getElementById("tipoDV").value,
            tipoSD: document.getElementById("tipoSD").value,
            doencas: document.getElementById("doencas").value,
        };

        // Salva no banco
        await adicionarItem(aluno);
        alert("Aluno salvo com sucesso!");

        // Limpa o formulário e atualiza a lista
        form.reset();
        await listarAlunos();
    });
}

// Lista os alunos salvos na tela
async function listarAlunos() {
    const alunos = await buscarItens();
    
    // Procura ou cria a área de listagem no HTML
    let lista = document.getElementById("listaAlunos");
    if (!lista) {
        lista = document.createElement("div");
        lista.id = "listaAlunos";
        lista.style.marginTop = "20px";
        document.querySelector("main").appendChild(lista);
    }

    // Se não houver alunos
    if (alunos.length === 0) {
        lista.innerHTML = "<p style='color: var(--texto-secundario)'>Nenhum aluno cadastrado ainda.</p>";
        return;
    }

    // Monta a listagem
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