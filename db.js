// ===== db.js — Mini Framework para IndexedDB =====

let bancoDB = null;

// FUNÇÃO 1: Iniciar o banco de dados
async function iniciarBanco() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("SafePlusDB", 1);

        // Cria a "tabela" (object store) se não existir
        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("alunos")) {
                db.createObjectStore("alunos", { keyPath: "id", autoIncrement: true });
                console.log("Tabela 'alunos' criada com sucesso!");
            }
        };

        request.onsuccess = function(event) {
            bancoDB = event.target.result;
            console.log("Banco SafePlusDB iniciado com sucesso!");
            resolve(bancoDB);
        };

        request.onerror = function(event) {
            console.error("Erro ao abrir o banco:", event.target.error);
            reject(event.target.error);
        };
    });
}

// FUNÇÃO 2: Adicionar um item ao banco
async function adicionarItem(dados) {
    return new Promise((resolve, reject) => {
        const transaction = bancoDB.transaction("alunos", "readwrite");
        const store = transaction.objectStore("alunos");
        const request = store.add(dados);

        request.onsuccess = function() {
            console.log("Aluno salvo com ID:", request.result);
            resolve(request.result);
        };

        request.onerror = function(event) {
            console.error("Erro ao salvar:", event.target.error);
            reject(event.target.error);
        };
    });
}

// FUNÇÃO 3: Buscar todos os itens do banco
async function buscarItens() {
    return new Promise((resolve, reject) => {
        const transaction = bancoDB.transaction("alunos", "readonly");
        const store = transaction.objectStore("alunos");
        const request = store.getAll();

        request.onsuccess = function() {
            resolve(request.result);
        };

        request.onerror = function(event) {
            console.error("Erro ao buscar:", event.target.error);
            reject(event.target.error);
        };
    });
}

// FUNÇÃO 4: Deletar um item pelo ID
async function deletarItem(id) {
    return new Promise((resolve, reject) => {
        const transaction = bancoDB.transaction("alunos", "readwrite");
        const store = transaction.objectStore("alunos");
        const request = store.delete(id);

        request.onsuccess = function() {
            console.log("Aluno deletado, ID:", id);
            resolve();
        };

        request.onerror = function(event) {
            console.error("Erro ao deletar:", event.target.error);
            reject(event.target.error);
        };
    });
}