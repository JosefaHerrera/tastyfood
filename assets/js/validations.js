$(document).ready(function() {
  $("#iniciar-sesion").click(validateForm);
  $('#iniciar-sesion').click(onLogin);//listener to button click

});

function validateForm() {
    var valid = true;
    if (!(/^([a-zñáéíóú]{2,13})+$/.test($("#firstname").val()))) {
        $("#firstname").css("border", "1px solid red");
        //alert('El nombre debe ser válido');
        valid = false;
    }
    if ($('#name-signup').val() == '') {
        $(".name-error").append('<span>Invalid name</span>');
        //alert('Username no debe estar vacío');
        valid = false;
    }

    if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#email-signup').val()))) {
        $(".email-error").append('<span>Invalid email</span>');
        //alert('Error en el email');
        valid = false;
    }
    if ($('#password').val() == '') {
        $(".pass-error").append('<span>Invalid Password (min 6 characters)</span>');

        //alert('Password no debe estar vacío');
        valid = false;
    }
    return valid;
}

/*function onLogin(){
    if (validateForm()) { //If validate form is True
        $("#iniciar-sesion").attr("href", "search.html");
    }
}*/


     