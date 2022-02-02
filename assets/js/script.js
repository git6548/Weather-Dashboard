// add logic to when you type in a city
var submit = document.querySelector("#submit-button");
var cityEntered = document.querySelector("#city-entered");
var cityList = document.querySelector("#city-list");
var lat = "50";
var lon = "99";
var displayContainer = document.querySelector("#display-container");

// when submit button is clicked, add text in input to a list of buttons
submit.addEventListener("click", function(event) {
event.preventDefault();
var cityEl = document.createElement("button");
cityEl.classList.add("city-button");
cityEl.textContent = cityEntered.value;
cityList.appendChild(cityEl);
});


// set up API for weather channel, can add this function into the event listener later

var makeCoordinates = function(cityEntered){

    var apiURL1 = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityEntered + "&appid=4523c39d6b573820e0a0469c2e98ebe6";
    fetch(apiURL1)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          console.log(lat);
          console.log(lat);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function() {
      alert("Unable to connect to Open Weather");
    });
};
/* 
var getWeather = function(lat,lon){

  var apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=4523c39d6b573820e0a0469c2e98ebe6";
  fetch(apiURL2)
  .then(function(lat,lon) {
    // request was successful
    if (response.ok) {
      console.log(response);
      response.json().then(function(lat,lon) {
        console.log(list.main.temp);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function(error) {
    alert("Unable to connect to Open Weather");
  });
};
   */


// dynamically create weather cards
var todayCard = document.createElement("div");
todayCard.classList.add("card");
todayCard.appendChild(displayContainer);
var todayTemp = document.createElement("p");
//todayTemp.textContent = ???
todayCard.appendChild(todayTemp);



