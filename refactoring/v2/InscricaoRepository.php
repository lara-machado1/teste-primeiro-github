<?php

require_once "IInscricaoRepository.php";

class InscricaoRepository implements IInscricaoRepository {

    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function save($inscricao) {
        $sql = "INSERT INTO inscricoes (nome, email) VALUES (:nome, :email)";
        $stmt = $this->pdo->prepare($sql);

        $stmt->bindValue(":nome", $inscricao->nome);
        $stmt->bindValue(":email", $inscricao->email);

        return $stmt->execute();
    }

    public function find($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM inscricoes WHERE id = :id");
        $stmt->bindValue(":id", $id);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM inscricoes WHERE id = :id");
        $stmt->bindValue(":id", $id);

        return $stmt->execute();
    }
}