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

