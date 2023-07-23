import React, { useEffect, useState } from "react";
import DaySection from "./daysection/DaySection";
import "./App.css";

function App() {
    const [weatherData, setWeatherData] = useState([{}]);

    useEffect(function () {
        fetch("/api/weather")
            .then((response) => response.json())
            .then((data) => setWeatherData(data))
            .catch((error) => console.error("Error fetching data:", error));
    });

    return (
        <>
            <h1 className="title">Weather App</h1>
            <form className="city-search" action="/by-city" method="post">
                <input type="text" placeholder="Enter City" />
                <button type="submit">Submit</button>
            </form>
            <DaySection />
            <DaySection />
            <DaySection />
            <DaySection />
            <DaySection />
            <div>{JSON.stringify(weatherData)}</div>
        </>
    );
}

export default App;
