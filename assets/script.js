// add variables here and api
var apikey = "abd9708dc20c0b406c4985d10d444f03";

function currentWeather () {
    navigator.geolocation.getCurrentPosition(function (position))
{
longitude = position.coords.longitude;
latitude = position.coords.latitude;

 var apicall =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  latitude + "&lon=" + 
  longitude + "&appid=" +
  apikey;

  $.ajax({
      url: apicall,
      method: "Get",
  })
  
}
// function for search bar


// add local sotrage to save recent searches

//fetch api info and display on page

//
