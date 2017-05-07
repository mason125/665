/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initMap() {
    var myCenter = new google.maps.LatLng(29.667418,-95.049149);
    var styles = [//sytles
                  {
                    featureType: "landscape",
                    stylers: [
                            { color: '#85f300' }
                    ]
            },{
                    featureType: "natural",
                    stylers: [
                            { hue: '#ff0000' }
                    ]
            },{
                    featureType: "road",
                    stylers: [
                            { hue: '#5500aa' },
                            { saturation: -100 }
                    ]
            },{
                    featureType: "building",
                    elementType: "labels",
                    stylers: [
                            { hue: '#000066' }
                    ]
            }
    ];

    //mapOption short and version 
    var map = new google.maps.Map(document.getElementById('map'), {
         center: myCenter,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         zoom: 9,
         styles: styles
    });


    var input = document.getElementById('pac-input');

    var autocomplete = new google.maps.places.Autocomplete(input);

    //set input box in the top right hand corner
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

    //infowindo content
    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
      map: map
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
      
    });


    autocomplete.addListener('place_changed', function() {
      infowindow.close();
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(9);
      }

      // Set the position of the marker using the place ID and location.
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location
      });
      

      
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = place.formatted_address;
      infowindow.open(map, marker);
    });
  }