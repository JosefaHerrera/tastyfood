$(document).ready(function() {
	// Initialize collapse button
	$(".button-collapse").sideNav();
	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();

	//Initalize select
	$('select').material_select();
	
	var apiKey = "27447235cea72bd049a49d4eb7d07474";
	$.ajax({
		url: 'https://developers.zomato.com/api/v2.1/location_details',
		type: 'GET',
		dataType: 'json',
		beforeSend: function(request){
			request.setRequestHeader("Content-Type","application/json");
			request.setRequestHeader("user-key", apiKey);
		},
		data : {
			'entity_id' : '83',
			'entity_type' : 'city'
		}
	})
	.done(function(res) {
		res.best_rated_restaurant.forEach(function(ele){
			console.log(ele);
			var ide = ele.restaurant.id;
			var img = ele.restaurant.thumb;
			var name = ele.restaurant.name;
			var comuna = ele.restaurant.location.locality;
			var direccion = ele.restaurant.location.address;
			var moneda = ele.restaurant.currency;
			var precioPorDos = ele.restaurant.average_cost_for_two;
			var rating = ele.restaurant.user_rating.aggregate_rating;
			
			$(".contenedorjson").append("<li><div class='card' id='"+ide+"'><div class='card-image'><a href='#' class='search_local' id='foto-"+ide+"'><img src='"+img+"' class='responsive-img'></a></div><div class='card-content'><div class='row'><div class='col s6'><p class='nombreR'>"+name+"</p></div><div class='col s6 right-align'><i class='fa fa-cutlery' aria-hidden='true'></i><span class='comuna'>"+comuna+"</span></div></div></div></div></li></a>");

			 $('#foto-'+ ide).click(function(){
			 	$(".search_caja").append(rating)
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
