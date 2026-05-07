<?php

$_POST['nome'] = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$_POST['email'] = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

if (empty($_POST['nome']) || empty($_POST['email'])) {
    die("Dados inválidos.");
}