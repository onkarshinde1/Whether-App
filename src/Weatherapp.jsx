import React, { useState } from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

function Weatherapp () {
    const [weatherInfo , setWeatherInfo] = useState( {
    feels_like: 26.06,
    humidity: 84,
    lat: 19.9833,
    lon: 73.8,
    name: "Nashik",
    sea_level: 1008,
    temp: 25.28,
    temp_max: 25.28,
    temp_min: 25.28,
    weather: "Clouds",
  });

  let updateInfo = (result) =>{
    setWeatherInfo(result);
  }


  return (
    <div>
        <h3 className='text-center'>Weatherapp by Onkar Shinde</h3>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        
    </div>
  )
}

export default Weatherapp;