$(document).ready(function() {
	// Initialize collapse button
	$(".button-collapse").sideNav();
	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	//$('.collapsible').collapsible();

	//Initalize select
	$('select').material_select();
	
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
	    	'entity_id' : '83',
	    	'entity_type' : 'city'
	    }
	})
	.done(function(res) {
		res.best_rated_restaurant.forEach(function(ele){
			console.log(ele);
			var img = ele.restaurant.thumb;
			var name = ele.restaurant.name;
			var comuna = ele.restaurant.location.locality;
			console.log(img);
			$(".contenedorjson").append("<li><div class='card'><div class='card-image'><img src='"+img+"'></div><div class='card-content'><p>"+name+" "+comuna+"</p></div></div></li>");
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
