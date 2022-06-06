// add variables here and api
var apikey = "abd9708dc20c0b406c4985d10d444f03";

// function for search bar search
function currentWeather() {
  navigator.geolocation.getCurrentPosition(function (position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    var apicall =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apikey;

    $.ajax({
      url: apicall,
      method: "Get",
    })
      // store fetced api data in our response
      .then(function (response) {
        var iconCode = response.weather[0].icon;

        var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        $(".city").html("<h1> " + response.name + " </h1>");
        $(".temp").text(
          "Temperature: " +
            ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) +
            " °F"
        );
        $(".humidity").text("Humidity: " + response.main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#wicon").attr("src", iconurl);
      });
  });
}
currentWeather();

// display weather 5 days ahead

function fivedayweather() {
  var fivedayurl =
    "https://api.openweathermap.org/data/2.5/forecast?q=San+Diego&appid=" +
    apikey;

  $.ajax({
    url: fivedayurl,
    method: "GET",
  }).then(function (responseTwo) {
    var icon1 = responseTwo.list[4].weather[0].icon;
    var icon1url = "http://openweathermap.org/img/w/" + icon1 + ".png";
  });
}

//fetch api info and display on page

//
