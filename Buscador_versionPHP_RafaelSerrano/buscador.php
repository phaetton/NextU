<?php
  require('./library.php');
  $filtroCiudad = $_GET['filtro']['Ciudad'];
  $filtroTipo = $_GET['filtro']['Tipo'];
  $filtroPrecio =  $_GET['filtro']['Precio'];
  $getData = readData();
  filterData($filtroCiudad, $filtroTipo, $filtroPrecio,$getData);
 ?>
