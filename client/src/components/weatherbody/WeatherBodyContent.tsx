import React from "react";
import "./weatherbody.css";
import { ListItemInterface } from "../../ListItemInterface";

interface WeatherBodyContentProps {
    weatherBodyContentData?: ListItemInterface;
}

function WeatherBodyContent({ weatherBodyContentData: data }: WeatherBodyContentProps) {
    return (
        <>
            {data ? (
                <div className="weather-body-content">
                    <h2 className="day">{data.dateInfo.hour}</h2>
                    <p className="special long-date">{data.longDate}</p>
                    <img className="weather-img" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="clear night" />
                    <p className="special sky-description">{data.weather[0].description}</p>
                    <p className="temp-description">Temperature: {`${Math.round(data.main.temp)}\u00B0F`}</p>
                    <p className="description">Feels Like: {`${Math.round(data.main.feels_like)}\u00B0F`}</p>
                    <p className="description">Low: {`${Math.round(data.main.temp_min)}\u00B0F`}</p>
                    <p className="description">High: {`${Math.round(data.main.temp_max)}\u00B0F`}</p>
                    <p className="description">humidity: {`${Math.round(data.main.humidity)}%`}</p>
                    <p className="description">Cloudiness: {`${Math.round(data.clouds.all)}%`}</p>
                </div>
            ) : (
                <p>loading inner weather data...</p>
            )}
        </>
    );
}

export default WeatherBodyContent;
