import React from "react";
import "./daysection.css";
import { DayButton, WeatherBody } from "../components";

const DaySection = () => {
    return (
        <div className="day-section">
            <DayButton />
            <WeatherBody />
        </div>
    );
};

export default DaySection;
