// const key = '42635e3cbf75489f4211bf361420053f'
// const url = 'https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=${langcid}&units=metric'

document.getElementById('toggle-menu-button').addEventListener('click', () => {
  document.getElementById('line-top').classList.toggle('line-top-checked');
  document.getElementById('line-middle').classList.toggle('line-middle-checked');
  document.getElementById('line-bottom').classList.toggle('line-bottom-checked');
  document.getElementById('menu').classList.toggle('menu-hidden');
});

document.getElementById('header-search-button').addEventListener('click', () => {
  document.getElementById('search-container').classList.toggle('search-container-hidden');
});