import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

function SearchBox() {
  let [city, setCity] = useState("");
  const API_KEY = "b0ec061fa79ebd1ccf356586f6fcc906";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWhetherInfo = async () => {
    try {
      let response = await fetch(
        `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse); // weather info here
      let result = {
        name : jsonResponse.name,
        lat : jsonResponse.coord.lat,
        lon : jsonResponse.coord.lon,
        temp: jsonResponse.main.temp,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        sea_level: jsonResponse.main.sea_level,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        weather :  jsonResponse.weather[0].main,
      };
      console.log(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  let handleChange = (eve) => {
    setCity(eve.target.value);
  };

  let handleSubmit = (eve) => {
    eve.preventDefault();
    getWhetherInfo();
    setCity(""); // clear after fetching
  };

  return (
    <div className="SearchBox">
      <h2>Search City</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
