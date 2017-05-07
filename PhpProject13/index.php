<!DOCTYPE html>
<html>
  <head>
    <title>Week 8</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <script src ="javascript.js"></script>
    <link rel="stylesheet" type="text/css" href="css.css">
  </head>
  <body>
    <input id="pac-input" class="controls" type="text"
        placeholder="Enter a location">
    <div id="map"></div>
    
    <div id="infowindow-content">
      <span id="place-name"  class="title"></span><br>
      <span id="place-address"></span>
    </div>

    <script src="https://maps.googleapis.com/maps/api/js?AIzaSyCGb2PL05AwjaPXk0GZfbKAoLOWYgYKxkA&callback&libraries=places&callback=initMap"
        async defer></script>
  </body>
</html>