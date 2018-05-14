<?php
$data = print_r(file_get_contents('php://input'), true);

$file = 'post_json.json';

// Ouvre un fichier pour lire un contenu existant
$current = file_get_contents($file);

// Ajoute une donnée
$current .= ",".$data;

// Écrit le résultat dans le fichier
file_put_contents($file, $current);

// Second step : en json
$current_json = "[".$current."]";

file_put_contents("../json/users_passions.json", $current_json);