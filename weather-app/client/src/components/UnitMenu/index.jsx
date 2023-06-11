import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./UnitMenu.css"
import {getSunriseAndSunset} from "../../js/conversion";
import {
    setPrecipitationUnit, setPressureUnit,
    setTemperatureUnit,
    setVisibilityUnit,
    setWindSpeedUnit
} from "../../redux/actions/weatherUnits";

const UnitsMenuComponent = ( { isUnitsMenuOpen } ) => {
    const dispatch = useDispatch();
    // const [showOverlay, setShowOverlay] = useState(false);

    const currentLocation = useSelector((state) => state.currentLocation);
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);

    const temperatureUnit = useSelector((state) => state.temperatureUnit);
    const windSpeedUnit = useSelector((state) => state.windSpeedUnit);
    const visibilityUnit = useSelector((state) => state.visibilityUnit);
    const precipitationUnit = useSelector((state) => state.precipitationUnit);
    const pressureUnit = useSelector((state) => state.pressureUnit);
    const [displayTemperature, setDisplayTemperature] = useState("");
    const [displayWindSpeed, setDisplayWindSpeed] = useState("");
    const [displayVisibility, setDisplayVisibility] = useState("");
    const [displayPrecipitation, setDisplayPrecipitation] = useState("");
    const [displayPressure, setDisplayPressure] = useState("");
    const [displaySunrise, setDisplaySunrise] = useState("");
    const [displaySunset, setDisplaySunset] = useState("");

    useEffect(() => {
        if (weatherInformation.current) {
            switch (temperatureUnit) {
                case true:
                    setDisplayTemperature(weatherInformation.current.temp_c + "⁰");
                    break;
                case false:
                    setDisplayTemperature(weatherInformation.current.temp_f + "F");
                    break;
            }
            switch (windSpeedUnit) {
                case true:
                    setDisplayWindSpeed(weatherInformation.current.wind_kph + " km/h");
                    break;
                case false:
                    setDisplayWindSpeed(weatherInformation.current.wind_mph + " mph");
                    break;
            }
            switch (visibilityUnit) {
                case true:
                    setDisplayVisibility(weatherInformation.current.vis_km + " km");
                    break;
                case false:
                    setDisplayVisibility(weatherInformation.current.vis_miles + " miles");
                    break;
            }
            switch (precipitationUnit) {
                case true:
                    setDisplayPrecipitation(weatherInformation.current.precip_mm + " mm");
                    break;
                case false:
                    setDisplayPrecipitation(weatherInformation.current.precip_in + " inches");
                    break;
            }
            switch (pressureUnit) {
                case true:
                    setDisplayPressure(weatherInformation.current.pressure_mb + " mbar");
                    break;
                case false:
                    setDisplayPressure(weatherInformation.current.pressure_in + " inches");
                    break;
            }
            let times = getSunriseAndSunset(weatherInformation.location.lat, weatherInformation.location.lon);
            setDisplaySunrise(times.sunrise);
            setDisplaySunset(times.sunset);
            // console.log("times: ", times);
        }

    }, [weatherInformation.current, temperatureUnit, windSpeedUnit, visibilityUnit, precipitationUnit, pressureUnit]);


    const handleTemperatureConversion = () => {
        if (temperatureUnit) {
            dispatch(setTemperatureUnit(false));
            setDisplayTemperature(weatherInformation.current.temp_f);
        } else {
            dispatch(setTemperatureUnit(true));
            setDisplayTemperature(weatherInformation.current.temp_c);
        }
    };

    const handleWindSpeedConversion = () => {
        if (windSpeedUnit) {
            dispatch(setWindSpeedUnit(false));
            setDisplayWindSpeed(weatherInformation.current.wind_kph);
        } else {
            dispatch(setWindSpeedUnit(true));
            setDisplayWindSpeed(weatherInformation.current.wind_mph);
        }
    };

    const handleVisibilityConversion = () => {
        if (visibilityUnit) {
            dispatch(setVisibilityUnit(false));
            setDisplayVisibility(weatherInformation.current.vis_km);
        } else {
            dispatch(setVisibilityUnit(true));
            setDisplayVisibility(weatherInformation.current.vis_miles);
        }
    };

    const handlePrecipitationUnit = () => {
        if (precipitationUnit) {
            dispatch(setPrecipitationUnit(false));
            setDisplayPrecipitation(weatherInformation.current.precip_mm);
        } else {
            dispatch(setPrecipitationUnit(true));
            setDisplayPrecipitation(weatherInformation.current.precip_in);
        }
    };

    const handlePressureUnit = () => {
        if (pressureUnit) {
            dispatch(setPressureUnit(false));
            setDisplayPressure(weatherInformation.current.pressure_mb);
        } else {
            dispatch(setPressureUnit(true));
            setDisplayPressure(weatherInformation.current.pressure_in);
        }
    };

    return (
        <div className={`app-menu ${isUnitsMenuOpen ? "menu-open" : ""}`}>
            <div>
                <button className="testbtn" onClick={handleTemperatureConversion}>Temp</button>
                <button className="testbtn" onClick={handleWindSpeedConversion}>Wind</button>
                <button className="testbtn" onClick={handleVisibilityConversion}>Visibility</button>
                <button className="testbtn" onClick={handlePrecipitationUnit}>Precipitation</button>
                <button className="testbtn" onClick={handlePressureUnit}>Pressure</button>
            </div>
        </div>
    );
};

export default UnitsMenuComponent;
