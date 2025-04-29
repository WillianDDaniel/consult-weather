// const key = '42635e3cbf75489f4211bf361420053f'
// const url = 'https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=${langcid}&units=metric'
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://openweathermap.org/img/wn/03d@2x.png

document.getElementById('toggle-menu-button').addEventListener('click', () => {
  document.getElementById('line-top').classList.toggle('line-top-checked');
  document.getElementById('line-middle').classList.toggle('line-middle-checked');
  document.getElementById('line-bottom').classList.toggle('line-bottom-checked');
  document.getElementById('menu').classList.toggle('menu-hidden');
});

document.getElementById('header-search-button').addEventListener('click', () => {
  document.getElementById('search-container').classList.toggle('search-container-hidden');
});

function getWeather() {
  const key = '42635e3cbf75489f4211bf361420053f';
  const cidade = 'Sao Paulo';
  const langcid = 'pt_br';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=${langcid}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

function getForecast() {
  const key = '42635e3cbf75489f4211bf361420053f';
  const cidade = 'Sao Paulo';
  const langcid = 'pt_br';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=${langcid}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

function getWeatherIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// getWeather();
// getForecast();