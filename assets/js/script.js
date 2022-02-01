// add logic to when you type in a city
var submit = document.querySelector("#submit-button");
var cityEntered = document.querySelector("#city-entered");
var cityList = document.querySelector("#city-list");
var lat = "50";
var lon = "99";

// when submit button is clicked, add text in input to a list of buttons
submit.addEventListener("click", function(event) {
event.preventDefault();
var cityEl = document.createElement("button");
cityEl.classList.add("city-button");
cityEl.textContent = cityEntered.value;
cityList.appendChild(cityEl);
});


// set up API for weather channel, can add this function into the event listener later

var generateWeather = function(cityEntered){

    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=4523c39d6b573820e0a0469c2e98ebe6";
    fetch(apiUrl)
    .then(function(cityEntered) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(cityEntered) {
          console.log(cityEntered);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to connect to Open Weather");
    });
};
    

