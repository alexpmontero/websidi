<?php

// Contact form by 

$mensaje.= "\n-----------------------------------\n";
$mensaje.= "\nDe: ".$_POST['nombre'];
$mensaje.= "\nE-mail: ".$_POST['correo'];
$mensaje.= "\nTelefono: ".$_POST['tel'];
$mensaje.= "\nMensaje: ".$_POST['mensaje'];
$mensaje.= "\n-----------------------------------\n";



$destino= "info@websidi.com";
$de = "Enviado desde Websidi.com por: ".$_POST['nombre'];
$remitente = $_POST['correo'];

mail($destino,$de,$mensaje,"FROM: $remitente");

print("Su mensaje ha sido enviado correctamente.");

?>