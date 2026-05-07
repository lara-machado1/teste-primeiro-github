<?php

require_once "Database.php";

$pdo = Database::getConnection();

$sql = "CREATE TABLE IF NOT EXISTS inscricoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT
)";

$pdo->exec($sql);

echo "Tabela criada!";