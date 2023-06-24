// https://openweathermap.org/current
// a9253ff7e32ee5cc5776fa717cfe252d
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//units=metric 이건 섭씨온도로 하는거


const API_KEY = "a9253ff7e32ee5cc5776fa717cfe252d";
const liWeather = document.querySelector('.header__right .weather:first-child')
const liTemp = document.querySelector('.header__right .weather:nth-child(2)')
const liLocation = document.querySelector('.header__right .location')

function getGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`${latitude}, ${longitude}`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    // fetch(url).then((response) => response.json())
    //           .then((data) => {
    //             console.log(data.name, data.weather[0].main)
    //           });
    fetch(url).then((response) => response.json())
              .then((data) => {
                console.log(data)

                const degree = Math.round(data.main.temp);
                const location = data.name;
                const weather = data.weather[0].main;

                liTemp.innerHTML = `${degree}&#176;`;
                liWeather.innerText = weather;
                liLocation.innerText = location;

                console.log(degree, location, weather);
              });

}

function getGeoError() {
    alert('We can not find you');
}

navigator.geolocation.getCurrentPosition(getGeoOk, getGeoError);