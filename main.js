const mainContentArea = document.querySelector(".main");
const searchButton = document.querySelector("[data-name=searchButton]");
const cityInput = document.querySelector("[data-name=city]");
const countryInput = document.querySelector("[data-name=country]");

import { initializeCurrentTime } from "./currentTime.js";
import { getData, weatherDescriptionByCode } from "./api.js";
import { createContent } from "./dom.js";

searchButton.onclick = async () => {
  mainContentArea.innerHTML = " ";
  // MY CURRENT TIME
  const currentTime = initializeCurrentTime();
  console.log(currentTime);
  // TAKE DATA FROM API
  const weatherData = await getData();
  console.log(weatherData);
  // COMPARE API DATA AND MY CURRENT TIME

  const {
    time,
    temperature_2m: temperatureData,
    relative_humidity_2m: humidityData,
    weather_code: weatherCode,
  } = weatherData;

  const indexToFind = time.findIndex((el) => el === currentTime);
  const temperature = temperatureData[indexToFind];
  const humidity = humidityData[indexToFind];
  const weatherState = weatherDescriptionByCode(weatherCode[indexToFind]);
  // you need to find index in a way to find temperature

  createContent({
    city: cityInput.value,
    country: countryInput.value,
    temperature,
    humidity,
    weatherState,
  });
};

export { cityInput, countryInput, mainContentArea };
