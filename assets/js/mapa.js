var map;
  var infowindow;

  function initMap() {
    var pyrmont = {lat: -33.4569400, lng: -70.6482700};

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pyrmont,
      radius: 500,
      type: ['restaurant']
    }, callback);
  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }



$(document).ready(function() {

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
		var lugar = res.best_rated_restaurant;

		lugar.forEach(function(e){
			var cocinaGuardada = e.restaurant.cuisines;

			$('#cocina').change(function(){
  			var kitchen = $("#cocina").val();
  			initMap().reload();
  			
  			if(kitchen == cocinaGuardada){
  				console.log(cocinaGuardada);
  			}
  		
  			});
		});	
	})
  		
  });

  
 



