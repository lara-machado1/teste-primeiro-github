<?php

require_once "Database.php";
require_once "Inscricao.php";
require_once "InscricaoRepository.php";
require_once "InscricaoService.php";
require_once "Controller.php";

$pdo = Database::getConnection();

$repository = new InscricaoRepository($pdo);
$service = new InscricaoService($repository);
$controller = new Controller($service);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once "middleware.php";
    $controller->store();

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "Acesse pelo formulário.";
    exit;
}
}