  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  $(document).ready(function(){
  	$("#iniciar-sesion").click(function(){
  		var valEmail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  		var valPass = /^\d{6}([0-9])*$/;

  		if($('.form-control').val().length == 0 || $('.form-control').val().length === ""){
  			alert('The field is empty');
  			return false;
  		}
  		if(!valEmail.test($('#email-signup').val().trim())){
  			alert('Invalid email');
  		}
  		if(!valPass.test($('#pass-signup').val().trim())){
  			alert('Invalid password');
  		}
  		else{
  			window.location.href = 'search.html';
  		}

  	});		
  });
