import React from "react";
import "./weatherbody.css";
import Slider from "../slider/Slider";

const Weather_Body = () => {
    return (
        <>
            <div className="weather-body">
                <h2 className="day">___</h2>
                <p className="special long-date">Month DD, YYYY</p>
                <img className="weather-img" src="https://openweathermap.org/img/wn/01n@2x.png" alt="clear night" />
                <p className="special sky-description">Clear Sky</p>
                <p className="temp-description">Temperature: 55.4</p>
                <p className="description">feels_like: 52.29</p>
                <p className="description">Low: 50.88</p>
                <p className="description">High: 50.88</p>
                <p className="description">humidity: 35</p>
                <p className="description">temp_kf: 2.51</p>
                <p className="description">clouds.all: 4</p>
            </div>
            <Slider />
        </>
    );
};

export default Weather_Body;
