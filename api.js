const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Drizzle: Light intensity",
  53: "Drizzle: Moderate intensity",
  55: "Drizzle: Dense intensity",
  56: "Freezing Drizzle: Light intensity",
  57: "Freezing Drizzle: Dense intensity",
  61: "Rain: Slight intensity",
  63: "Rain: Moderate intensity",
  65: "Rain: Heavy intensity",
  66: "Freezing Rain: Light intensity",
  67: "Freezing Rain: Heavy intensity",
  71: "Snow fall: Slight intensity",
  73: "Snow fall: Moderate intensity",
  75: "Snow fall: Heavy intensity",
  77: "Snow grains",
  80: "Rain showers: Slight",
  81: "Rain showers: Moderate",
  82: "Rain showers: Violent",
  85: "Snow showers: Slight",
  86: "Snow showers: Slight",
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

async function findCoordinate(city, country) {
  const coordinatesUrl = `https://nominatim.openstreetmap.org/search?city=${city}&country=${country}&format=json`;
  const coordinatesResponse = await fetch(coordinatesUrl);
  const coordinatesData = await coordinatesResponse.json();
  console.log(coordinatesData[0]);
  return coordinatesData[0];
}

async function getWeather(lat, lon) {
  const wetterUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&minutely_15=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`;
  const wetterResponse = await fetch(wetterUrl);
  const wetterGeneralData = await wetterResponse.json();
  console.log(wetterGeneralData);
  const wetterData = wetterGeneralData.minutely_15;
  console.log(wetterData);
  return wetterData;
}

async function findWeather(city, country) {
  const location = await findCoordinate(city, country);
  const weather = await getWeather(location.lat, location.lon);
  return {
    location,
    weather,
  };
}

function weatherDescriptionByCode(code) {
  return `${weatherCodes[code]}`;
}

export { findWeather, weatherDescriptionByCode };
