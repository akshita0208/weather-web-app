<!DOCTYPE html>
<html>
  <head>
    <title> weather app</title>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Weather web app</title>
    <link rel="stylesheet" href="style.css">
      <style>
      body{
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        font-size: 1em;
        text-shadow: 0 0 10px #000;
        color: #fff;
        background: #888;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        
        
    }
        section{
          min-height: 100%;
        }

        h1{
          font-size: 2em;
          padding: 0 0.3em;
          line-height: 1em;
        }

        p{
          padding: 0 2em;
        }

        a{
          color: #fff;
        }

        footer{
          position: absolute;
          bottom: 0;
          font-size: 0.5em;
        }

        #temperature{
          text-decoration: none;
          border-bottom: 0.05em dotted white;
          
        }
      </style>
  </head>
  <body>
    <section>
      <h1 id="city">weather web app</h1>
      <p><a id="temperature" href="#" onclick="switchUnits(); return false;" title="Click to switch between metric and imperial units"></a><span id="weather">by @akshitajain0208</span></p>
    </section>
    <footer>
      <p>Powered by <a href="http://flickr.com/services/api/">Flickr</a> and <a href="http://openweathermap.org">Openweathermap.org</a>
      </p></footer>
    <script>
      var weatherData = {
        city: document.querySelector("#city"),
        weather: document.querySelector("#weather"),
        temperature: document.querySelector("#temperature"),
        temperatureValue: 0,
        units: "°C"
      };
      function loadBackground(lat, lon, weatherTag) {
        var script_element = document.createElement('script');

        script_element.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=56d1013a351cfd09b521d2a0aaf50ee1&lat=" + lat + "&lon=" + lon + "&accuracy=1&tags=" + weatherTag + "&sort=relevance&extras=url_l&format=json";

        document.getElementsByTagName('head')[0].appendChild(script_element);
      }
      function getLocationAndWeather(){
        if (window.XMLHttpRequest){
          var xhr = new XMLHttpRequest();
          xhr.addEventListener("load", function() {
            var response = JSON.parse(xhr.responseText);

            console.log(response);
            var position = {
              latitude: response.latitude,
              longitude: response.longitude
            };
            var cityName = response.city;

            var weatherSimpleDescription = response.weather.simple;
            var weatherDescription = response.weather.description;
            var weatherTemperature = roundTemperature(response.weather.temperature);

            weatherData.temperatureValue = weatherTemperature;

            loadBackground(position.latitude, position.longitude, weatherSimpleDescription);
            weatherData.city.innerHTML = cityName;
            weatherData.weather.innerHTML =  ", " + weatherDescription;
            weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
          }, false);

          xhr.addEventListener("error", function(err){
            alert("Could not complete the request");
          }, false);

          xhr.open("GET", "https://fourtonfish.com/tutorials/weather-web-app/getlocationandweather.php?owapikey=e72be63b8afe2ec1fb2584463364eeb7&units=metric", true);
          xhr.send();
        }
        else{
          alert("Unable to fetch the location and weather data.");
        }           
      }
      function jsonFlickrApi(data){
        if (data.photos.pages > 0){
          var photo = data.photos.photo[0];
          document.querySelector("body").style.backgroundImage = "url('" + photo.url_l + "')";
          document.querySelector("#image-source").setAttribute("href", "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id);
        }
        else{
          document.querySelector("body").style.backgroundImage = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
          document.querySelector("#image-source").setAttribute("href", "https://www.flickr.com/photos/superfamous/310185523/sizes/o/");
        }
      }
      getLocationAndWeather();
    
    </script>
  </body>
</html>
