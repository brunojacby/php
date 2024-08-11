<?php
header('Content-Type: application/json');

$apiUrl = "https://freetestapi.com/api/v1/books";

// Manipula a requisição
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        $response = file_get_contents($apiUrl);
        echo $response;
        break;

    case 'POST':
        $options = [
            'http' => [
                'method' => 'POST',
                'header' => 'Content-Type: application/json',
                'content' => json_encode($input),
            ],
        ];
        $context = stream_context_create($options);
        $response = file_get_contents($apiUrl, false, $context);
        echo $response;
        break;

    case 'PUT':
        $url = $apiUrl . "/" . $input['id'];
        $options = [
            'http' => [
                'method' => 'PUT',
                'header' => 'Content-Type: application/json',
                'content' => json_encode($input),
            ],
        ];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        echo $response;
        break;

    case 'DELETE':
        $url = $apiUrl . "/" . $_GET['id'];
        $options = [
            'http' => [
                'method' => 'DELETE',
            ],
        ];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        echo $response;
        break;

    default:
        echo json_encode(['message' => 'Método não suportado']);
        break;
}
?>