<?php
header('Content-Type: application/json');
include('../db.php');

$name = $_GET['name'];
$email = $_GET['email'];

$stmt = $pdo->prepare("SELECT * FROM users WHERE name LIKE ? OR email LIKE ?");
$stmt->execute(["%$name%", "%$email%"]);
$user = $stmt->fetchAll(PDO:: FETCH_ASSOC);

echo json_encode([
  'status' => true,
  'data' => $user
])

?>