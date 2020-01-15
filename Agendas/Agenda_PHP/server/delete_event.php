<?php
  session_start();
  require('conector.php');

  if (isset($_SESSION['username'])) 
  {
    $con = new ConectorBD('localhost', 'root', '');
    if ($con->initConexion('agenda_db')=='OK') 
    {    
      $resultado = $con->consultar(['usuarios'], ['Id_Usuario'], "WHERE Email ='".$_SESSION['username']."'");
      $row = $resultado->fetch_assoc();     
      
        if ($con->eliminarRegistro('agenda', 'Id_Agenda ='.$_POST['id'])) {
            $response['msg']="OK";
          }else {
            $response['msg']= "No se pudo eliminar el registro";
          }

      $response['msg'] = "OK";

    }else {
      $response['msg'] = "No se pudo conectar a la Base de Datos";
      
    }
  }else {
    $response['msg'] = "No se ha iniciado una sesión";
  }

  echo json_encode($response);



 ?>
