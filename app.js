const searchTemperature = () => {
  const API_KEY = `1cd29190ec2b3fe1f1f856680c12b929`;
  const city_name = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => weather(data));
};
const weather = (temp) => {
  document.getElementById("city").innerHTML = temp.name;
  document.getElementById("temperature").innerHTML = temp.main.temp;
  document.getElementById("condition").innerHTML = temp.weather[0].main;
  const imgUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  document.getElementById("weather-icon").setAttribute("src", imgUrl);
};