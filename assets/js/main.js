
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  $(document).ready(function(){
  	$("#iniciar-sesion").click(function(event){
  		if($("#name-signup").val() == "" || !(/[0-9]/.test($("#name-signup").val()))){
  			$("#name-signup").append($("#name-signup").val("Add name"));
        localStorage.setItem('nombre',$("#name-signup").val());
  		}
  		if( $("#email-signup").val() == "" || !(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#email-signup").val()))){
  			$("#email-signup").append($("#email-signup").val("Add valid email"));
  		}
  		if( $("#pass-signup").val() == "" || !(/^\d{8}([0-9])*$/.test($("#pass-signup").val())) ){
  			$("#pass-signup").append($("#pass-signup").val("Add valid password"));
  		}
  		else{
  			$("#iniciar-sesion").attr("href","search.html");
  		}
  	});
        var name = localStorage.getItem('nombre');
    $('#nombre').html(name);
  });


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

