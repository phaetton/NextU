<?php
  session_start();
  require('conector.php');
  if (isset($_SESSION['username'])) 
  {
    $con = new ConectorBD('localhost', 'root', '');
    if ($con->initConexion('agenda_db')=='OK') 
    {    
      //proceso

      $data['Fecha_Inicio'] = "'".$_POST['start_date']."'";
      $data['Fecha_Fin']    = "'".$_POST['end_date']."'";
      $data['Hora_Inicio']  = "'".$_POST['start_hour']."'";
      $data['Hora_Fin']     = "'".$_POST['end_hour']."'";
      if ($con->actualizarRegistro('agenda', $data, 'Id_Agenda = '.$_POST['id'])) {
            $response['msg']="OK";
          }else {
            $response['msg']= "No se pudo Actualizar el registro";
            ;
          }
//fin proceso
    }else {
      $response['msg'] = "No se pudo conectar a la Base de Datos";     
    }
  }else {
    $response['msg'] = "No se ha iniciado una sesión";
  }
  echo json_encode($response);

 ?>
