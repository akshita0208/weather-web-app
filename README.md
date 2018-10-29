# weather-web-app
<!DOCTYPE html>
<html>
  <head>
    <title> weather app</title.
    
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
    
    </script>
  </body>
</html>
sjsjj
