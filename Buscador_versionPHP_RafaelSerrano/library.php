<?php
/*Leer el archivo que contiene la informacion*/
function readData(){
  $data_file = fopen('./data-1.json', 'r'); 
  $data = fread($data_file, filesize('./data-1.json')); 
  $data = json_decode($data, true); 
  fclose($data_file); 
  return ($data);
};

/*Inicializar los input select*/
function getCities($getData){
  $getCities = Array(); 
  foreach ($getData as $cities => $city) {
    if(in_array($city['Ciudad'], $getCities)){ 
      //Continue
    }else{
      array_push($getCities, $city['Ciudad']); 
    }
  }
  echo json_encode($getCities); 
}

function getTipo($getData){
  $getTipo = Array();
  foreach ($getData as $tipos => $tipo) { 
    if(in_array($tipo['Tipo'], $getTipo)){ 
    }else{
      array_push($getTipo, $tipo['Tipo']); 
    }
  }
  echo json_encode($getTipo); 
}

/*Filtrar la información*/
function filterData($filtroCiudad, $filtroTipo, $filtroPrecio,$data){
  $itemList = Array(); 
  if($filtroCiudad == "" and $filtroTipo=="" and $filtroPrecio==""){ 
    foreach ($data as $index => $item) {
      array_push($itemList, $item); 
    }
    //El campo precio siempre tendra un valor.
  }else{ 
    //valor menor del rango de precios
    $menor = $filtroPrecio[0];
    //valor mayor del rango de precios
    $mayor = $filtroPrecio[1]; 

      if($filtroCiudad == "" and $filtroTipo == ""){ 
        foreach ($data as $items => $item) {
            $precio = precioNumero($item['Precio']);
            //Comparar si el precio se encuentra dentro de los valores del filtro
        if ( $precio >= $menor and $precio <= $mayor){ 
          //objeto con precio dentro del rango.
            array_push($itemList,$item ); 
          }
        }
      }

      if($filtroCiudad != "" and $filtroTipo == ""){ 
          foreach ($data as $index => $item) {
            $precio = precioNumero($item['Precio']);
            if ($filtroCiudad == $item['Ciudad'] and $precio > $menor and $precio < $mayor){ 
              array_push($itemList,$item );
            }
        }
      }

      if($filtroCiudad == "" and $filtroTipo != ""){ 
          foreach ($data as $index => $item) {
            $precio = precioNumero($item['Precio']);
            if ($filtroTipo == $item['Tipo'] and $precio > $menor and $precio < $mayor){ 
              array_push($itemList,$item ); 
            }
        }
      }

      if($filtroCiudad != "" and $filtroTipo != ""){ 
          foreach ($data as $index => $item) {
            $precio = precioNumero($item['Precio']);
            if ($filtroTipo == $item['Tipo'] and $filtroCiudad == $item['Ciudad'] and $precio > $menor and $precio < $mayor){ 
              array_push($itemList,$item ); 
            }
        }
      }


  }
  //Devolver el arreglo en formato JSON
  echo json_encode($itemList); 
};

//Convertir la cadena de caracteres en numero
function precioNumero($itemPrecio){ 
  //Eliminar el símbolo Dolar
  $precio = str_replace('$','',$itemPrecio); 
  //Eliminar la coma (separador de miles)
  $precio = str_replace(',','',$precio);
  //Devolver el valor de tipo Numero
  return $precio; 
}
?>
