<?php
  session_start();
  require('conector.php');

  if (isset($_SESSION['username'])) 
  {
    $con = new ConectorBD('localhost', 'root', '');
    if ($con->initConexion('agenda_db')=='OK') 
    {    
      $resultado = $con->consultar(['usuarios'], ['Nombre', 'Id_Usuario'], "WHERE Email ='".$_SESSION['username']."'");
      $row = $resultado->fetch_assoc();     
        //$response[$i]['nombre']=$row['Nombre'];
      
      $resultado = $con->getEventosUser($row['Id_Usuario']);
      $i=0;
      while ($fila = $resultado->fetch_assoc()) 
      {
        $response['eventos'][$i]['id']      =$fila['Id_Agenda'];
        $response['eventos'][$i]['title']   =$fila['Titulo'];

        if($fila['Dia_Completo']==1)
        {
          $response['eventos'][$i]['completeday']     =true;
          $response['eventos'][$i]['start']           =$fila['Fecha_Inicio'];
          $response['eventos'][$i]['end']             =$fila['Fecha_Fin'];
        }
        else
        {
          $response['eventos'][$i]['completeday']     =false;
          $response['eventos'][$i]['start']           =$fila['Fecha_Inicio'];
          $response['eventos'][$i]['end']             =$fila['Fecha_Fin'];
          $response['eventos'][$i]['start']           =$fila['Fecha_Inicio'].' '.$fila['Hora_Inicio'];
          $response['eventos'][$i]['end']             =$fila['Fecha_Fin'].' '.$fila['Hora_Fin'];
        }
        
        $i++;
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
