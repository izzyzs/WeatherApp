import React, { useEffect, useState } from "react";
import DaySection from "./daysection/DaySection";
import "./App.css";
import { ListItemInterface } from "./ListItemInterface";

interface WeatherData {
    list: Array<Array<ListItemInterface>>;
}

function App() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(function () {
        fetch("/api/weather")
            .then((response) => response.json())
            .then((data) => setWeatherData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <h1 className="title">Weather App</h1>
            <form className="city-search" action="/by-city" method="post">
                <input type="text" placeholder="Enter City" />
                <button type="submit">Submit</button>
            </form>
            {weatherData ? (
                <div>
                    {weatherData.list.map((item, index) => (
                        <div key={index}>
                            <DaySection dayButtonChildren={item[0].longDate} weatherBodyContentData={item} />
                        </div>
                    ))}
                </div>
            ) : (
                // <div>{JSON.stringify(weatherData)}</div>
                <p>Loading weather data...</p>
            )}
            {/* <div>{JSON.stringify(weatherData)}</div> */}
        </>
    );
}

export default App;
