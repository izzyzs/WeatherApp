import "./slidercomponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { ReactNode } from "react";
import Slider from "react-slick";
import WeatherBodyContent from "../weatherbody/WeatherBodyContent";

import { ListItemInterface } from "../../ListItemInterface";

interface SliderComponentProps {
    children?: ReactNode;
    weatherBodyContentData?: Array<ListItemInterface>;
}

interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
}

function SliderComponent({ children, weatherBodyContentData: data }: SliderComponentProps): JSX.Element {
    const settings: SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            {data ? (
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <WeatherBodyContent weatherBodyContentData={data[index]} />
                    ))}
                </Slider>
            ) : (
                <p>loading inner weather data...</p>
            )}
        </>
    );
}

export default SliderComponent;
