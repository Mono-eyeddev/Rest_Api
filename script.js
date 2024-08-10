// JavaScript to fetch and display the weather data
const apiKey = '4b9c6a9bcb8b83f641c2623d0ef409a1';

document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value; // Get the user input
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Update the HTML with the fetched data
        document.getElementById('city').textContent = `Weather in ${city}`;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('weather-description').textContent = data.weather[0].description;
      })
      .catch(error => {
        document.getElementById('city').textContent = 'Error fetching data';
        document.getElementById('temperature').textContent = '';
        document.getElementById('weather-description').textContent = '';
        console.error('Error fetching data:', error);
      });
});
