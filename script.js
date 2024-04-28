function getWeather() {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = 'c8d33b73ee4c3273025a407a8c2ec0b9';
    const city = 'London'; // Replace 'London' with the desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon; // Icon code provided by OpenWeatherMap
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`; // URL for the weather icon

            const weatherInfo = `
                <p>Temperature: ${temperature} °C</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;
            document.querySelector('.weather').innerHTML = weatherInfo;
        })
        .catch(error => console.error('Error fetching weather:', error));
}