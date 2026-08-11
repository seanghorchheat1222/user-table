<?php
header('Content-Type: application/json');
include '../db.php';

$id = $_GET['id'];

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
$user = $stmt->fetch(PDO:: FETCH_ASSOC);

echo json_encode(
  [
    'status' => true,
    'data' => $user
  ]
)
?>