import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./InfoBox.css";

function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let RAINY_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180 }}i
          image={info.humidity  >=60 ? INIT_URL : info.humidity  >= 80 ? RAINY_URL : info.temp > 20 ? HOT_URL : COLD_URL}
          title="Weather Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div>Temperature = {info.temp}&deg;C</div>
            <div>
              Temp Max = {info.temp_max}&deg;C & Temp Min = {info.temp_min}
              &deg;C
            </div>
            <div>
              Feels Like = {info.feels_like}&deg;C | Humidity = {info.humidity}%
            </div>
            <div>
              Latitude = {info.lat} | Longitude = {info.lon}
            </div>
            <div>Sea level = {info.sea_level}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
