<?php

class Controller {

    private $service;

    public function __construct($service) {
        $this->service = $service;
    }

    public function store() {
        try {

            $inscricao = new Inscricao();
            $inscricao->nome = $_POST['nome'];
            $inscricao->email = $_POST['email'];

            $this->service->salvar($inscricao);

            header("Location: sucesso.html");

        } catch (BusinessRuleException $e) {
            echo "Erro: " . $e->getMessage();
        } catch (Exception $e) {
            echo "Erro no sistema.";
        }
    }
}