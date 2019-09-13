$(function(){
    getCities(); 
    getTipo(); 
    hideLoader();
  })
  
////Agregar las ciudades al input selectCiudad
    function getCities(){ 
      $.ajax({
        url:'./cities.php', 
        type: 'GET', 
        data:{},//sin parametros
        success:function(cityList){   
          cityList = validateJson(cityList, 'Ciudad')
          $.each(cityList, function( index, value ) { 
            $('#selectCiudad').append(
              '<option value="'+value+'">'+value+'</option>')  
          });
        }
      }).done(function(){
        $('select').material_select();//renderiza el select
      })
    }

     //Obtener los valores de los tipos y agregarlos en el campo select Tipo
  function getTipo(){ 
    $.ajax({
      url:'./tipo.php',
      type: 'GET', 
      data:{},
      success:function(tipoList){ 
        tipoList = validateJson(tipoList, 'Tipo')
        $.each(tipoList, function( index, value ) { 
          $('#selectTipo').append('<option value="'+value+'">'+value+'</option>')
        });
      },
    }).done(function(){
      $('select').material_select(); 
    })
  }

  //carga lenta
  function hideLoader(){
    $(".loader").fadeOut("slow");
  }
  
  //mostrar todo sin ningun filtro
  $('#mostrarTodos').on('click', function(){
    $('.progress').show() //barra de progreso
    buscarItem(false); //sin filtro
  })
  
  //mostrar busqueda con filtro
  $('#formulario').on('submit', function(event){
    event.preventDefault(); 
    $('.progress').show() 
    buscarItem(true); //con filtro
  })
    
  //valida el codigo json
  function validateJson(validateJson, lista){
    try { 
      var validateJson = JSON.parse(validateJson)
      return validateJson
    } catch (e) {
      getError('','SyntaxError '+lista); 
      }
  }
  
  //verifica si ya hay busqueda anterior, si es asi elimina estos, y realiza la busqueda
  function buscarItem(filter){
    if($('.colContenido > .item') != 0){ 
      $('.colContenido > .item').detach() 
    }
    var filtro = getFiltros(filter)
    $.ajax({
      url:'./buscador.php', 
      type: 'GET', 
      data:{filtro}, //Enviar la información de los filtros.
      success:function(items, textStatus, errorThrown ){ 
        try {
          item = JSON.parse(items); 
        } catch (e) {
          getError(500,'SyntaxError'); 
        }
  
        $.each(item, function(index, item){ 
          //Recorrer el objeto y agregar a la clase .colContenido
          $('.colContenido').append(
             //Anexar los items que correspondan al filtro consultado
            '<div class="col s12 item">'+
              '<div class="card itemMostrado">'+
                '<img src="./img/home.jpg">'+
                  '<div class="card-stacked">'+
                    '<div class="card-content">'+
                      '<p><b>Direccion: </b>'+item.Direccion+'</p>'+ 
                      '<p><b>Ciudad: </b>'+item.Ciudad+'</p>'+ 
                      '<p><b>Teléfono: </b>'+item.Telefono+'</p>'+ 
                      '<p><b>Código postal: </b>'+item.Codigo_Postal+'</p>'+ 
                      '<p><b>Tipo: </b>'+item.Tipo+'</p>'+ 
                      '<p><b>Precio: </b><span class="precioTexto">'+item.Precio+'</span></p>'+ 
                    '</div>'+
                    '<div class="card-action">'+
                      '<a href="#">Ver más</a>'+
                    '</div>'+
                  '</div>'+
              '</div>'+
            '</div>'
          )
        })
      },
    }).done(function(){ 
      var totalItems = $('.colContenido > .item').length 
      $('.tituloContenido.card > h5').text("Resultados de la búsqueda: "+ totalItems + " items" ) 
      $('.progress').hide() 
    }).fail(function( jqXHR, textStatus, errorThrown ){ 
      //Mostrar mensaje de error al usuario
        getError(jqXHR, textStatus) 
    })
  }
  
  function getFiltros(filter){
    //Obtener los valores maximos y minimos del input
    var rango = $('#rangoPrecio').val(), 
    rango = rango.split(";") 
  
    //si no se aplicaran filtros Asignar valores vacios
    if (filter == false){ 
      var getCiudad = '',
          getTipo = '',
          getPrecio = ''
    }else{
      var getPrecio = rango, 
          getCiudad = $('#selectCiudad option:selected').val(), 
          getTipo = $('#selectTipo option:selected').val() 
    }
  
      var filtro = { 
        Precio:getPrecio,
        Ciudad: getCiudad,
        Tipo: getTipo
      }
  
      //Devolver el filtro
    return filtro; 
  }
  
  //Función encargada de verificar los errores generados en la consulta
  function getError(jqXHR, textStatus){ 
    var error = ""
  
    if (jqXHR.status === 0) {
      error =  ('No hay conexión con el servidor: Verifique su red.');
  
    } else if (jqXHR.status == 404) {
      error =  ('Pagina no encontrada [404]');
  
    } else if (jqXHR.status == 500) {
      error =  ('Error interno del servidor [500]');
  
    } else if (textStatus === 'parsererror') {
      error =  ('Error de análisis de formato JSON.');
  
    } else if (textStatus === 'SyntaxError') {
      error =  ('Json fallado.');
  
    } else if (textStatus === 'SyntaxError Tipo') {
      error =  ('Error obteniendo la información de la <b>Listas  de Selección Tipo</b>.<br><small> SyntaxError: Error con los datos JSON</small><br>');
  
    } else if (textStatus === 'SyntaxError Ciudad') {
      error =  ('Error obteniendo la información de la <b>Listas  de Selección Ciudad</b>.<br><small> SyntaxError: Error con los datos JSON</small><br>');
  
    } else if (textStatus === 'timeout') {
      error =  ('Error de tiempo');
  
    } else if (textStatus === 'abort') {
      error =  ('Error con solicitud Ajax.');
  
    } else {
      error =  ('Error Inesperado: ' + jqXHR.responseText);
    }
  
    //Modidicar el contenido de la descripción de modal error
    $('#error p').html(error)
    //Modificar el contenido del Titulo del modal error
    $('#error h2').text("Error:" + jqXHR.status)
    //Abrir el modal Error
    $('#error').openModal() 
    //Ocultar la barra de progreso de busqueda
    $('.progress').hide() 
  }
  