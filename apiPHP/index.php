<?php 
require_once("./db/conexion.php");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

if($_SERVER["REQUEST_METHOD"]=="GET"){
    if(isset($_GET["id"])){
        $query="SELECT * FROM tabla_comida WHERE id=".$_GET["id"];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="SELECT * FROM tabla_comida";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());
    }
    header("HTTP/1.1/ 200 OK");
    exit();
}

if($_POST["METHOD"]=="POST"){
    unset($_POST["METHOD"]);
    $nombre=$_POST["nombre"];
    $imagen=$_POST["imagen"];
    $query="INSERT INTO tabla_comida(nombre,imagen) values('$nombre','$imagen')";
    $queriAutoIncrement="SELECT MAX(id) AS id FROM tabla_comida";
    $resultado=metodoPost($query,$queriAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1/ 200 OK");
    exit();
}

if($_POST["METHOD"]=="PUT"){
    unset($_POST["METHOD"]);
    $id=$_GET["id"];
    $nombre=$_POST["nombre"];
    $imagen=$_POST["imagen"];
    $query="UPDATE tabla_comida SET nombre='$nombre', imagen='$imagen' WHERE id='$id'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1/ 200 OK");
    exit();
}

if($_POST["METHOD"]=="DELETE"){
    unset($_POST["METHOD"]);
    $id=$_GET["id"];
    $query="DELETE FROM tabla_comida WHERE id='$id'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1/ 200 OK");
    exit();
}

header("HTTP/1.1/ 200 Bad Request");

?>