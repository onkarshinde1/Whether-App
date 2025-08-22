import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (eve) => {
    setCity(eve.target.value);
  };

  let handleSubmit = (eve) => {
    eve.preventDefault();
    console.log(city);
    setCity("");
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
          className="form-control"
        />
        <Button variant="contained" type="submit" className="btn btn-primary">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
