import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert"; // for error message
import CircularProgress from "@mui/material/CircularProgress"; // loading spinner
import "./SearchBox.css";

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_KEY = "b0ec061fa79ebd1ccf356586f6fcc906";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherInfo = async () => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return {
      name: data?.name || "Unknown",
      lat: data?.coord?.lat ?? "N/A",
      lon: data?.coord?.lon ?? "N/A",
      temp: data?.main?.temp ?? "N/A",
      feels_like: data?.main?.feels_like ?? "N/A",
      humidity: data?.main?.humidity ?? "N/A",
      pressure: data?.main?.pressure ?? "N/A",
      sea_level: data?.main?.sea_level ?? "N/A",
      temp_max: data?.main?.temp_max ?? "N/A",
      temp_min: data?.main?.temp_min ?? "N/A",
      weather: data?.weather?.[0]?.main || "N/A",
    };
  } catch (err) {
    // ✅ now it's not "useless"
    throw new Error(
      err.message === "City not found"
        ? "City not found"
        : "Unable to fetch weather data. Please check your internet connection."
    );
  }
};

  const handleChange = (e) => {
    setCity(e.target.value);
    setError(""); // clear error when user types again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
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

        {error && <Alert severity="error">no such place is exists</Alert>}

        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>
      
      </form>
    </div>
  );
}

export default SearchBox;
