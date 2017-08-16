  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  $(document).ready(function(){
  	$("#iniciar-sesion").click(function(){
  		var valEmail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  		var valPass = /^\d{6}([0-9])*$/;

  		if($('.form-control').val().length == 0 || $('.form-control').val().length === ""){
  			$(".name-error").append('<span>Invalid name</span>');
  			return false;
  		}
  		if(!valEmail.test($('#email-signup').val().trim())){
        $(".email-error").append('<span>Invalid email</span>');
  		}
  		if(!valPass.test($('#pass-signup').val().trim())){
  			$(".pass-error").append('<span>Invalid Password (min 6 characters)</span>');
  		}
  		else{
  			window.location.href = 'search.html';
  		}

  	});		
  });
