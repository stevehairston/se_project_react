export const getForecastWeather = () => {
  const latitude = "38.750660";
  const longitude = "-77.475143";
  const APIkey = "141a62ef81f041dac8eee44114914481";
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {if (res.ok) {
    return res.json();

  } else{
    return Promise.reject(`Error: ${res.status}`)
  }});
  return weatherApi;
};

// export const parseWeatherData = (data) => {
//     const main = data.main
//     const temperature = main && main.temp;
//     console.log(Math.ceil(temperature))
//     return Math.ceil(temperature);
// };
