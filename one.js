// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f2e85a35a0msh18d88eec21d4231p15c1aejsnd37ec6fdb7fe',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const weatherApp = () => {
    const getWeather = (city) => {
        cityName.innerHTML = city;

        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(city)}`, options)
            .then(response => response.json())
            .then((response) => {
                feels_like.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                humidity2.innerHTML = response.humidity;
                max_temp.innerHTML = response.max_temp;
                min_temp.innerHTML = response.min_temp;
                sunrise.innerHTML = response.sunrise;
                sunset.innerHTML = response.sunset;
                temp.innerHTML = response.temp;
                temp2.innerHTML = response.temp;
                wind_degrees.innerHTML = response.wind_degrees;
                wind_speed.innerHTML = response.wind_speed;
                wind_speed2.innerHTML = response.wind_speed;
            })
            .catch(err => console.log(err));
    };
    
 

    submit.addEventListener('click', (event) => {
        event.preventDefault();
        getWeather(city.value);
    });

    // can call getWeather with a default city
    getWeather("Mumbai");


};

// Call the weatherApp function to set up the event listener and default city
weatherApp();















