
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

/*INICIO validaciones*/
  $(document).ready(function(){
  	$("#iniciar-sesion").click(function(event){
  		if($("#name-signup").val() == "" || !(/[0-9]/.test($("#name-signup").val()))){
  			$("#name-signup").append($("#name-signup").val("Add name"));
        localStorage.setItem('nombre',$("#name-signup").val());
  	$("#iniciar-sesion").click(function(){
  		var valEmail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  		var valPass = /^\d{6}([0-9])*$/;
      //validar campos vacios
  		if($('.form-control').val().length == 0 || $('.form-control').val().length === ""){
  			$(".name-error").append('<span>Invalid name</span>');
  			return false;
  		}
      //validar email
  		if(!valEmail.test($('#email-signup').val().trim())){
        $(".email-error").append('<span>Invalid email</span>');
  		}
      //validar contraseña
  		if(!valPass.test($('#pass-signup').val().trim())){
  			$(".pass-error").append('<span>Invalid Password (min 6 characters)</span>');
  		}
      //enviar a la siguiente página
  		else{
  			window.location.href = 'search.html';
  		}
  	});
        var name = localStorage.getItem('nombre');
    $('#nombre').html(name);
  };
  	});		
  });
/*FIN validaciones*/
$(document).ready(function() {
	// Initialize collapse button
	$(".button-collapse").sideNav();
	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();

	//Initalize select
	$('select').material_select();
	
	$('#ciudades').change(function() {
		$(".contenedorjson").empty(); //Al selecciona una nueva opciópn en el selec, se limpia el espacio y se anida la nueva info
	    var idCiudad = $('#ciudades').val();
	    console.log(idCiudad);
	    //valor seleccionado por el usuario

	    var apiKey = "14ef190d0d46132d2c5ad0b7a911e606";
	    $.ajax({
	        url: 'https://developers.zomato.com/api/v2.1/location_details',
	        type: 'GET',
	        dataType: 'json',
	        beforeSend: function(request){
	            request.setRequestHeader("Content-Type","application/json");
	            request.setRequestHeader("user-key", apiKey);
	        },
	        data : {
	            'entity_id' : idCiudad,
	            'entity_type' : 'city'
	        }
	    })
	    .done(function(res) {
	        res.best_rated_restaurant.forEach(function(ele){
	            console.log(ele);
	            var img = ele.restaurant.thumb;
	            var name = ele.restaurant.name;
	            var comuna = ele.restaurant.location.locality;
	            $(".contenedorjson").append("<li><div class='card'><div class='card-image'><a class='imgdetails' type='button'><img src='"+img+"'></a></div><div class='card-content'><i class='fa fa-cutlery' aria-hidden='true'></i><p class='nombreR'>"+name+"</p><i class='fa fa-map-marker' aria-hidden='true'></i><p class='comuna'>"+comuna+"</p></div></div></li>");
	            
	            $(".imgdetails").click(function(e){
	            	$(".info").append(name);
	            })

	        })
	    })
	    .fail(function(response) {
	        console.log("error");
	    })
	    .always(function() {
	        console.log("complete");
	    });
	    
	});



});

>>>>>>> 88f2e75b71bd1012275031dd4c27a502418cf4d9
