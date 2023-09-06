import React from "react";
import "./weatherbody.css";
import SliderComponent from "../slidercomponent/SliderComponent";
import WeatherBodyContent from "./WeatherBodyContent";
import { ListItemInterface } from "../../ListItemInterface";

interface WeatherBodyProps {
    active?: boolean;
    weatherBodyContentData?: Array<ListItemInterface>;
}

function WeatherBody({ active, weatherBodyContentData }: WeatherBodyProps) {
    return (
        <div className={"weather-body" + (active ? " active" : "")}>
            <SliderComponent weatherBodyContentData={weatherBodyContentData} />
        </div>
    );
}

export default WeatherBody;
