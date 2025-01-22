const container = document.querySelector('.main-container');

const weathernum = document.querySelector('.number');

const weatherlocation = document.querySelector('.location');

const searchbar = document.querySelector('input');

const searchbtn = document.querySelector('button');

const weathericon = document.querySelector('.icon');

container.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const xPercent = (mouseX / window.innerWidth) * 100;
  const yPercent = (mouseY / window.innerHeight) * 100;

  container.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)`;
});

searchbar.addEventListener('change',(e)=>{
    
    const loc = e.target.value;
    async function CallWeather() {
        const response = await fetch(weatherAPIURL +`&appid=${APIKEY}` + `&q=${loc}`);
        const data = await response.json();
        weathernum.innerHTML = Math.round(data.main.temp);
        weatherlocation.innerHTML = data.name;
        console.log(data);
        if(data.weather[0].main == 'Clear'){
            weathericon.src = 'assets/Clear.svg'
        }
        else if(data.weather[0].main == 'Clouds'){
            weathericon.src = 'assets/Clouds.svg'
        }
        else if(data.weather[0].main == 'Rain'){
            weathericon.src = 'assets/Rain.svg'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weathericon.src = 'assets/Drizzle.svg'
        }
        else if(data.weather[0].main == 'Snow'){
            weathericon.src = 'assets/Snow.svg'
        }
        else if(data.weather[0].main == 'Thunderstorm'){
            weathericon.src = 'assets/Thunderstorm.svg'
        }
        else if(data.weather[0].main == 'Fog'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Mist'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Haze'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Smoke'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Dust'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Sand'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Ash'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Squall'){
            weathericon.src = 'assets/Fog.svg'
        }
        else if(data.weather[0].main == 'Tornado'){
            weathericon.src = 'assets/Fog.svg'
        }
    }
    searchbtn.addEventListener('click',()=>{ CallWeather();
        
    });
});


const APIKEY= '39ddd3e6c06bfd5922068c1a5e71068d';

const weatherAPIURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';




