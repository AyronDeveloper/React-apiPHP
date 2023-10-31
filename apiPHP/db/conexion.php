<?php 
$pod=null;
$host="localhost";
$user="root";
$password="123456789";
$bd="randomfood";

function Conectar(){
    try{
        $GLOBALS["pdo"]=new PDO("mysql:host=".$GLOBALS["host"].";dbname=".$GLOBALS["bd"]."",$GLOBALS["user"],$GLOBALS["password"]);
        $GLOBALS["pdo"]->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e) {
        echo "Error!: no se puedo abrir la conexion ".$GLOBALS["bd"]."<br>";
        echo "\nError!: ".$e."<br>";
        die();
    }
}

function Desconectar(){
    $GLOBALS["pdo"]=null;
}

function metodoGet($query){
    try{
        Conectar();
        $sentencia=$GLOBALS["pdo"]->prepare($query);
        $sentencia->setFetchMode(PDO::FETCH_ASSOC);
        $sentencia->execute();
        Desconectar();
        return $sentencia;
    }catch(PDOException $e){
        die("Error: ".$e);
    }
}

function metodoPost($query,$queryAutoIncrement){
    try{
        Conectar();
        $sentencia=$GLOBALS["pdo"]->prepare($query);
        $sentencia->execute();
        $idAutoIncrement=metodoGet($queryAutoIncrement)->fetch(PDO::FETCH_ASSOC);
        $resultado=array_merge($idAutoIncrement,$_POST);
        $sentencia->closeCursor();
        Desconectar();
        return $resultado;
    }catch(PDOException $e){
        die("Error: ".$e);
    }
}

function metodoPut($query){
    try{
        Conectar();
        $sentencia=$GLOBALS["pdo"]->prepare($query);
        $sentencia->execute();
        $resultado=array_merge($_GET,$_POST);
        $sentencia->closeCursor();
        Desconectar();
        return $resultado;
    }catch(PDOException $e){
        die("Error: ".$e);
    }
}

function metodoDelete($query){
    try{
        Conectar();
        $sentencia=$GLOBALS["pdo"]->prepare($query);
        $sentencia->execute();
        $sentencia->closeCursor();
        Desconectar();
        return $_GET["id"];
    }catch(PDOException $e){
        die("Error: ".$e);
    }
}
?>