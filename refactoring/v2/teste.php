<?php
require_once "Database.php";

$pdo = Database::getConnection();

echo "Conectou!";