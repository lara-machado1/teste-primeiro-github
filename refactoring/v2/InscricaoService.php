<?php

require_once "BusinessRuleException.php";

class InscricaoService {

    private $repository;

    public function __construct($repository) {
        $this->repository = $repository;
    }

    public function salvar($inscricao) {

        if (empty($inscricao->nome) || empty($inscricao->email)) {
            throw new BusinessRuleException("Preencha todos os campos.");
        }

        if (!filter_var($inscricao->email, FILTER_VALIDATE_EMAIL)) {
            throw new BusinessRuleException("Email inválido.");
        }

        return $this->repository->save($inscricao);
    }
}