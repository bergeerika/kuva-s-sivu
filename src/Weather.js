import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useState, useEffect, useRef } from "react";


export default function Weather() {
  const [value] = useState(false);
  const [city] = useState("");
  const [list, setList] = useState([]);
 
  
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=61.4898&lon=23.7735&appid=6d892e063e81f08650e982ef3e2cb3d4&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        console.log(data);
      });
    },
    [city]);
  const my = () => {
    if (value) {
      result();
      console.log(value);
    }
  };

  const result = () => {
    return (
      <div
        style={{
          backgroundColor: "rgb(100 172 193 / 79%)",
          display: "block",
          margin: "auto",
          width: "40%",
          borderRadius: "6%",
          padding: "2%",
          marginTop: "4%",
          textAlign: "center",
          marginBottom: "4%"
        }}
      >
        <h2>Temperature: {list?.main?.temp}°C</h2>
        <h2>Max Temperature: {list?.main?.temp_max}°C</h2>
        <h2>Min Temperature: {list?.main?.temp_min}°C</h2>
        <h2>Humidity: {list?.main?.humidity} %</h2>
        <h2>Wind Speed: {list?.wind?.speed} km/h</h2>
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <div> 
      <h1>Weather Tampere</h1>
      <hr />
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div>{result()}</div>
    </div>
  );

};