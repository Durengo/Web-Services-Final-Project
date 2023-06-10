import React from "react";
import "./WeatherMain.css";
import MapContainer from "../MapContainer";
import DetailsComponent from "../Details";
import CurrentConditionsComponent from "../CurrentConditions";
import { weatherMainData } from "../../js/App";
import SliderComponent from "../Slider";
import NavbarComponent from "../Navbar";
import TestSliderComponent from "../TestSlider";

function WeatherMain(props) {
    const {

    } = props;

    return (
        <div className="weather-site1">
            <NavbarComponent {...weatherMainData}/>
            <img className="line" src="/img/line.svg" alt="Line" />
            <div className="flex-row-1">
                <CurrentConditionsComponent {...weatherMainData}/>
                <DetailsComponent {...weatherMainData}/>
            </div>

            <TestSliderComponent/>
            <div className="text-label-map">Map of weather conditions</div>
            <MapContainer />
        </div>
    );
}

export default WeatherMain;
