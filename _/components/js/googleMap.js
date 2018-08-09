function initMap() {
        var uluru = {lat: -36.869808, lng: 174.777999};
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
