const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a062848edbmsh4c48fd841dbeb99p1eaabfjsn87c9779e8330",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const weather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityname.innerHTML = city;

      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;

      cloud_pct.innerHTML = response.cloud_pct;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_degrees2.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;

      // sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  weather(city.value);
});

weather("Delhi");
