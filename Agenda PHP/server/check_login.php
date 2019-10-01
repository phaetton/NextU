<?php
  session_start();
  require('conector.php');
  $con = new ConectorBD('localhost','root','');
  $response['conexion'] = $con->initConexion('agenda_db');
  if ($response['conexion']=='OK') {

    $resultado_consulta = $con->consultar(['usuarios'],['Email', 'Contrasena'], 'WHERE Email="'.$_POST['username'].'"');

    if ($resultado_consulta->num_rows != 0) {

      $fila = $resultado_consulta->fetch_assoc();
      if (password_verify($_POST['password'], $fila['Contrasena'])) {

       // if ($_POST['password'] == $fila['Contrasena']) {
          
        $response['msg'] = 'OK';
        $_SESSION['username']=$fila['Email'];

      }else{
        $response['msg'] = 'Contraseña Invalida';
      }
    }else{
      $response['motivo'] = 'Email incorrecto';
      $response['acceso'] = 'rechazado';
      $response['msg'] = 'Email Invalido';
      
    }
  }

  echo json_encode($response);

  $con->cerrarConexion();






 ?>
