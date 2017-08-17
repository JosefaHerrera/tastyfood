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
