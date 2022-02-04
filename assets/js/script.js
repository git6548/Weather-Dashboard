// add logic to when you type in a city
var submit = document.querySelector("#submit-button");
var cityEntered = document.querySelector("#city-entered");
var cityList = document.querySelector("#city-list");
var displayContainer = document.querySelector("#display-container");
//var cityArr = [""];
// when submit button is clicked, add text in input to a list of buttons
submit.addEventListener("click", function(event) {
event.preventDefault();

// if(!cityArr.includes(cityEntered.value)){
//   cityArr.push(cityEntered.value)
// }
//loop through cityArr{
var cityEl = document.createElement("button");
cityEl.classList.add("city-button");
//}
cityEl.textContent = cityEntered.value;
cityList.appendChild(cityEl);
makeCoordinates(cityEntered.value)
});


// set up API for weather channel, can add this function into the event listener later

var makeCoordinates = function(cityEntered){

    var apiURL1 = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityEntered + "&appid=4523c39d6b573820e0a0469c2e98ebe6";
    fetch(apiURL1)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        //console.log(response);
        response.json().then(function(data) {
          var lat = data[0].lat;
          var lon = data[0].lon;
          //console.log(data);
          getWeather(lat,lon);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function() {
      alert("Unable to connect to Open Weather");
    });
};

var getWeather = function(lat,lon){


  var apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=4523c39d6b573820e0a0469c2e98ebe6&units=metric";
  fetch(apiURL2)
  .then(function(response) {
    // request was successful
    if (response.ok) {
      //var todayCard = document.createElement("div");
      //todayCard.textContent = ???
      //todayCard.appendChild(displayContainer);
     // console.log(response);
      response.json().then(function(data) {
        console.log(data)

        for(var i = 0; i < 5; i++){
          var date = new Date(data.daily[i].dt * 1000);
          console.log(date)
          var dayCard = document.createElement("div");
          dayCard.classList.add("card");
          dayCard.classList.add("col-2");
          displayContainer.append(dayCard);
          var icon = data.daily[i].weather[0].icon;
          var image = document.createElement("img");
          image.src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
         // console.log(image);
          var temp = document.createElement("p");
          temp.textContent = (data.daily[i].temp.day);
          var displayDate = document.createElement("p");
          displayDate.textContent = (date);
          var displayCity = document.createElement("p");
          displayCity.textContent = (cityEntered.value);
          var humidity = document.createElement("p");
          humidity.textContent = (data.daily[i].humidity);
          var windSpeed = document.createElement("p");
          windSpeed.textContent = (data.daily[i].wind_speed);
          var uvi = document.createElement("p");
          uvi.textContent = (data.daily[i].uvi);
          dayCard.appendChild(displayCity);
          dayCard.appendChild(displayDate);
          dayCard.appendChild(image);
          dayCard.appendChild(temp);
          dayCard.appendChild(humidity);
          dayCard.appendChild(windSpeed);
          dayCard.appendChild(uvi);
        };
       
        //console.log(list.main.temp);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function(error) {
    alert("Unable to connect to Open Weather");
  });
};
  


/* // dynamically create weather cards
var todayCard = document.createElement("div");
todayCard.classList.add("card");
todayCard.appendChild(displayContainer);
var todayTemp = document.createElement("p");
//todayTemp.textContent = ???
todayCard.appendChild(todayTemp);

 */

