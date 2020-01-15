$(function(){


  $('#formulario').submit(function(event){
    event.preventDefault();

    var form_data = new FormData();
    form_data.append('nombre', $('#nombre').val())
    form_data.append('fechanacimiento', $('#fechanacimiento').val())
    form_data.append('contrasena', $('#contrasena').val())
    form_data.append('email', $('#email').val())

    $.ajax({
      url: '../server/create_user.php',
      dataType: "json",
      cache: false,
      processData: false,
      contentType: false,
      data: form_data,
      type: 'POST',
      success: (data) =>{
        if (data.msg=="OK") {
          alert('Se ha añadido el evento exitosamente')
          
        }else {
          alert(data.msg)
        }
      },
      error: function(){
        alert("error en la comunicación con el servidor en el form");
      }
    })
 
      }
    )
  }); 