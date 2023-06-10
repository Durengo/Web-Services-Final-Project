import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../redux/actions/actions";
import {fetchCurrentLocation} from "../../js/fetchCurrentLocation";
import {convertToFahrenheit} from "../../js/conversion";

function CurrentConditionsComponent(props) {
    // const dispatch = useDispatch();
    const currentLocation = useSelector((state) => state.currentLocation);
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);
    const [displayTemperature, setDisplayTemperature] = useState("");
    const [feelsLikeTemperature, setFeelsLikeTemperature] = useState("");
    const [celsius, setCelsius] = useState(true);

    // useEffect(() => {
    //     console.log("TESTING HOOK");
    //
    //     if (location) {
    //         // const parsedLocation = JSON.parse(location);
    //         // console.log(location);
    //         console.log("IF TESTING HOOK");
    //
    //     }
    // }, [location]);

    // const data = useSelector((state) => state.data);

    // useEffect(() => {
    //     setTimeout(() => {
    //         const newData = "Some Data";
    //         dispatch(setData(newData));
    //     }, 1000);
    // }, [dispatch]);

    useEffect(() => {
        if (weatherInformation.current) {
            setDisplayTemperature(weatherInformation.current.temp_c);
            setFeelsLikeTemperature(weatherInformation.current.feelslike_c);
        }
    }, [weatherInformation.current]);

    const {
        citytoday,
        currentregiontoday,
        conditionicontoday,
        feelslikeconditiontoday,
        textconditiontoday,
        spanText1,
        spanText2,
    } = props;

    if (isFetchingCurrentLocation || isFetchingWeatherInformation)
    {
        return <div>LOADING...</div>;
    }

    const handleConversion = () => {
        if (celsius)
        {
            setDisplayTemperature(weatherInformation.current.temp_f);
            setFeelsLikeTemperature(weatherInformation.current.feelslike_f);
            setCelsius(false);
        }
        else
        {
            setDisplayTemperature(weatherInformation.current.temp_c);
            setFeelsLikeTemperature(weatherInformation.current.feelslike_c);
            setCelsius(true);
        }
    };
    // setDisplayTemperature(weatherInformation.current.temp_c);

                       // <button className="testbtn" onClick={() => {
                       //      const converted = convertToFahrenheit(weatherInformation.current.temp_c);
                       //  }}>Convert to Fahrenheit</button>
    return (
        <div className="current-conditions">
            <div className="overlap-group11">
                <div className="overlap-group10">
                    <div className="today-container">
                        <h1 className="city-today">{currentLocation.city.name}</h1>
                        <div className="current-region-today">{currentLocation.area.name + ", " + currentLocation.country.name}</div>
                    </div>
                    <div className="condition-container">
                        <img
                            className="condition-icon-today"
                            src={weatherInformation.current.condition.icon}
                            alt="ConditionIconToday"
                        />
                        <div className="feels-like-condition-today">
                            {"Feels like " + feelsLikeTemperature + "⁰"}
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
              <span className="span1">{spanText2}</span>
            </span>
                    </div>
                    <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
                    <button className="testbtn" onClick={handleConversion}>Convert</button>

                </div>
            </div>

        </div>
    );
}

export default CurrentConditionsComponent;
