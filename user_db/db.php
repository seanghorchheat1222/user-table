<?php 
  
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");

  if($_SERVER["REQUEST_METHOD"] === 'OPTIONS'){
    http_response_code(204);
    exit;
  }

  $host = "localhost";
  $port = "3308";
  $db = "testing_database";
  $username = "root";
  $password = "";

  try{
   $pdo = new PDO("mysql: host=$host;port=$port;dbname=$db", $username, $password);
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
  }catch(PDOException $e){
   echo "Connection Failed". $e->getMessage();
  }


?>