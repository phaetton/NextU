<?php
  session_start();
  require('conector.php');

    $con = new ConectorBD('localhost', 'root', '');
    if ($con->initConexion('agenda_db')=='OK') 
    {    
      //proceso
      $data['Nombre']       = "'".$_POST['nombre']."'";
      $data['Contrasena'] = "'".password_hash($_POST['contrasena'], PASSWORD_DEFAULT)."'";
      $data['Email']    = "'".$_POST['email']."'";
      $data['Fecha_Nacimiento']  = "'".$_POST['fechanacimiento']."'";
       if ($con->insertData('usuarios', $data)) {
            $response['msg']="OK";
          }else {
            $response['msg']= "No se pudo agregar el usuario";
          }
//fin proceso
    }else {
      $response['msg'] = "No se pudo conectar a la Base de Datos";     
    }

  echo json_encode($response);

 ?>
