import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTemperatureUnit} from "../../redux/actions/weatherUnits";

function CurrentConditionsComponent() {
    const dispatch = useDispatch();
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);
    const isChangingUnits = useSelector((state) => state.isChangingUnits);
    const [displayTemperature, setDisplayTemperature] = useState("");
    const [feelsLikeTemperature, setFeelsLikeTemperature] = useState("");
    const temperatureUnit = useSelector((state) => state.temperatureUnit);
    const sessionUsingIp = useSelector((state) => state.sessionUsingIp);

    useEffect(() => {
        if (weatherInformation.current) {
            if (temperatureUnit) {
                setDisplayTemperature(weatherInformation.current.temp_c + "⁰");
                setFeelsLikeTemperature(weatherInformation.current.feelslike_c + "⁰");
            } else {
                setDisplayTemperature(weatherInformation.current.temp_f + "F");
                setFeelsLikeTemperature(weatherInformation.current.feelslike_f + "F");
            }
        }
    }, [weatherInformation.current, temperatureUnit]);

    if (!weatherInformation || isFetchingCurrentLocation || isFetchingWeatherInformation) {
        return <div>LOADING...</div>;
    }

    // Kept for internal conversion, but API provides conversion capabilities.
    const handleConversion = () => {
        if (temperatureUnit) {
            dispatch(setTemperatureUnit(false));
            setDisplayTemperature(weatherInformation.current.temp_f);
            setFeelsLikeTemperature(weatherInformation.current.feelslike_f);
        } else {
            dispatch(setTemperatureUnit(true));
            setDisplayTemperature(weatherInformation.current.temp_c);
            setFeelsLikeTemperature(weatherInformation.current.feelslike_c);
        }
    };

    return (
        <div className="current-conditions">
            <div className="overlap-group11">
                <div className="overlap-group10">
                    <div className="today-container">
                        <h1 className="city-today">{weatherInformation.location.name}</h1>
                        <div
                            className="current-region-today">{weatherInformation.location.region + ", " + weatherInformation.location.country}</div>
                    </div>
                    <div className="condition-container">
                        <img
                            className="condition-icon-today"
                            src={weatherInformation.current.condition.icon}
                            alt="ConditionIconToday"
                        />
                        <div className="feels-like-condition-today">
                            {"Feels like " + feelsLikeTemperature}
                        </div>
                    </div>
                    <div className="text-condition-today">{weatherInformation.current.condition.text}</div>
                </div>
                <div className="flex-row-2">
                    <div className="temperature-today valign-text-bottom inter-normal-midnight-blue-60px">
            <span>
              <span className="inter-normal-midnight-blue-60px">
                {displayTemperature}
              </span>
              <span className="span1"></span>
            </span>
                    </div>
                    <img className="line-1" src="/img/line-1.svg" alt="Line 1"/>
                </div>
            </div>

        </div>
    );
}

export default CurrentConditionsComponent;
