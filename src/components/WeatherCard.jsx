import React, { useState } from "react";

const WeatherCard = ({ weather, temp   }) => {
  const [isCelsius, setisCelsius] = useState(true);
  const handleClick = () => setisCelsius(!isCelsius);
  var today = new Date();
 
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  options.timeZone = 'UTC';
  options.timeZoneName = 'short';
  let now2 = today.toLocaleDateString('es', options);
  let now = today.toTimeString('es', options);
  
  
  

  return (
    
    <article className="card">
     
      <header className="card__header">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">
          {weather?.name}, {weather?.sys.country}
        </h2>
        <h5 className="card__date">{now2} </h5>
        
      </header>
      <section className="card__icon-container">
        <img
          className="card__icon"
          src={ 
             weather   &&
               `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
             
          }
          alt=""
        />
      </section>
      <section className="card__info">
        <h3 className="card__description">
          "{weather?.weather[0].description}"
        </h3>
        <ul className="card__list">
          <li className="=card__item">
            <span className="card__span">Wind speed</span> {weather?.wind.speed}{" "}
            m/s
          </li>
          <li className="=card__item">
            <span className="card__span">Clouds</span> {weather?.clouds.all} %
          </li>
          <li className="=card__item">
            <span className="card__span">Pressure </span>{" "}
            {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <h3 className="card__temp">
        {isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}
      </h3>
      <footer className="card__footer">
        <button onClick={handleClick} className="card__btn">
          Change to {isCelsius ? "°F" : "°C"}{" "}
        </button>
      </footer>
      {/* <div className="card__search">
        <input type="text"className="card__search-input" placeholder="buscar por ciudad"></input>
      </div> */}
    </article>
  );
};

export default WeatherCard;
