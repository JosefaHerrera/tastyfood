$(document).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  //Initalize select
  $('select').material_select();
  
  $('#ciudades').change(function() {
    $(".contenedorjson").empty(); //Al selecciona una nueva opciópn en el selec, se limpia el espacio y se anida la nueva info
    $(".info").empty();
      var idCiudad = $('#ciudades').val();
      console.log(idCiudad);
      //valor seleccionado por el usuario

      var apiKey = "4e7a74042a2f392bc1d0435f749f26b6";
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
        console.log(res);
          res.best_rated_restaurant.forEach(function(ele){
              console.log(ele);
              var img = ele.restaurant.thumb;
              var name = ele.restaurant.name;
              var comuna = ele.restaurant.location.locality;
              var precio = ele.restaurant.average_cost_for_two;
              var rating = ele.restaurant.user_rating.aggregate_rating;
              var idrest = ele.restaurant.id;
              $(".contenedorjson").append("<li><div class='card'><div class='card-image'><a class='imgdetails' type='button'><img src='"+img+"'></a></div><div class='card-content'><a type='button' class='restdetails'><i class='fa fa-cutlery' aria-hidden='true'></i></a><p class='nombreR'>"+name+"</p><i class='fa fa-map-marker' aria-hidden='true'></i><p class='comuna'>"+comuna+"</p></div></div></li>");
              
              $(".imgdetails").click(function(){
                $(".info").empty();
                $(".info").append("<div class='franjanaranja'><div class='row'><div class='col s8'><p class='nomRest'>"+name+"</p></div><div class='col s4 right-align'><i class='fa fa-heart' aria-hidden='true'></i></div></div><div class='cajablanca'><div class='row'><div class='col s12'><p class='address'>Address</p></div></div><div class='row'><div class='col s12'><p class='ubicacionrest'>"+comuna+"</p></div></div><div class='row'><div class='col s12'><p class='precio'>Precio</p></div></div><div class='row'><div class='col s12'><p class='preciorest'>"+precio+"</p></div></div><div class='row'><div class='col s12'><p class='rating'>Rating</p></div></div><div class='row'><div class='col s12'><p class='ratingrest'>'"+rating+"</p></div></div></div>");

                $(".fa-heart").click(function(){
                  $(this).css('color', 'tomato');
                })
              })

              

               $(".restdetails").click(function(){
                $(".info").empty();
                $(".info").append("<div class='row'><div class='col s4'></div><div class='col s4' id='nombreCaja'>"+name+"</div><div class='col s4' id='nombreCaja'>"+name+"</div></div><div class='row'><div class='col s4' id='blancoCaja'><i class='fa fa-circle' aria-hidden='true'></i>Cuisine</div><div class='col s4' id='blancoCaja'>"+precio+"</div><div class='col s4' id='blancoCaja'>"+precio+"</div></div><div class='row'><div class='col s4' id='blancoCaja'><i class='fa fa-circle' aria-hidden='true'></i>Cost for two</div><div class='col s4' id='blancoCaja'>"+precio+"</div><div class='col s4' id='blancoCaja'>"+precio+"</div></div><div class='row'><div class='col s4' id='blancoCaja'><i class='fa fa-circle' aria-hidden='true'></i>Rate</div><div class='col s4' id='blancoCaja'>"+rating+"</div><div class='col s4' id='blancoCaja'>"+rating+"</div></div>");
              })

          })
      })
      .fail(function(response) {
        console.log(response);
          console.log("error");
      })
      .always(function() {
          console.log("complete");
      });
      
  });



});