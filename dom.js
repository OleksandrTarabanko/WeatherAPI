import { mainContentArea } from "./main.js";

function createContent(city, country, temperature, humidity, weatherState) {
  const currentPosition = document.createElement("h1");
  currentPosition.textContent = `You're searching weather for ${city} in ${
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()
  }`;

  const currentTemperature = document.createElement("p");
  currentTemperature.textContent = `Current Temperature is ${temperature} °C`;

  const currentHumidity = document.createElement("p");
  currentHumidity.textContent = `Humidity is ${humidity} %`;

  const currentWeatherState = document.createElement("p");
  currentWeatherState.textContent = `General Weather Description: "${weatherState}"`;

  mainContentArea.append(
    currentPosition,
    currentTemperature,
    currentHumidity,
    currentWeatherState
  );
}

export { createContent };
