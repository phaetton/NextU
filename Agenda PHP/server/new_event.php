<?php
  session_start();
  require('conector.php');
  if (isset($_SESSION['username'])) 
  {
    $con = new ConectorBD('localhost', 'root', '');
    if ($con->initConexion('agenda_db')=='OK') 
    {    
      $resultado = $con->consultar(['usuarios'], ['Nombre', 'Id_Usuario'], "WHERE Email ='".$_SESSION['username']."'");
      $fila = $resultado->fetch_assoc();     
      //proceso
      $data['Titulo']       = "'".$_POST['titulo']."'";
      $data['Fecha_Inicio'] = "'".$_POST['start_date']."'";
      $data['Fecha_Fin']    = "'".$_POST['end_date']."'";
      $data['Hora_Inicio']  = "'".$_POST['start_hour']."'";
      $data['Hora_Fin']     = "'".$_POST['end_hour']."'";
      $data['Fk_Usuario']   = "'".$fila['Id_Usuario']."'";
      if ($_POST['allDay'] == 'true') {
        $data['Dia_Completo']= 1;
      }else{
        $data['Dia_Completo']= 0; 
      }
       if ($con->insertData('agenda', $data)) {
            $response['msg']="OK";
          }else {
            $response['msg']= "No se pudo agregar el registro";
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
