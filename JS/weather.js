const APIKEY = '620becc08099cd24d4e6de1c4abea3f8';

function good(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const APIKEY = '620becc08099cd24d4e6de1c4abea3f8';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('.weather');
        const weathericon = document.createElement('img');
        weathericon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        weather.appendChild(weathericon);
        const temp = document.createElement('div')
        temp.innerText = `${data.main.temp}℃`;
        weather.appendChild(temp);
    });
}


function notgood(){
    alert('GPS Error!')
    };
navigator.geolocation.getCurrentPosition(good, notgood);