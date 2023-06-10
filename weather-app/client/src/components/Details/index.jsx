import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setPrecipitationUnit, setPressureUnit,
    setTemperatureUnit,
    setVisibilityUnit,
    setWindSpeedUnit
} from "../../redux/actions/weatherUnits";
import {getSunriseAndSunset} from "../../js/conversion";

function DetailsComponent(props) {
    const dispatch = useDispatch();
    const currentLocation = useSelector((state) => state.currentLocation);
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);
    const isChangingUnits = useSelector((state) => state.isChangingUnits);
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

    const {
        detailsLabel,
        realfeellabeltoday,
        realfeelconditiontoday,
        windconditiontoday,
        windlabeltoday,
        uvindexlabeltoday,
        uvindexconditiontoday,
        humiditylabeltoday,
        visibilitylabeltoday,
        precipitationlabeltoday,
        humidityconditiontoday,
        visibilityconditiontoday,
        precipitationconditiontoday,
        pressureconditiontoday,
        pressurelabeltoday,
        sunriseconditiontoday,
        place1,
        sunsetconditiontoday,
        place2,
    } = props;

    if (isFetchingCurrentLocation || isFetchingWeatherInformation) {
        return <div>LOADING...</div>;
    }

    return (
        <div className="details">
            <div className="flex-row-3">
                <div className="flex-col">
                    <div className="s-label bakbakone-normal-black-20px">{detailsLabel}</div>
                    <div className="realfeel-container">
                        <div className="real-feel-label-today inter-normal-black-14px">{realfeellabeltoday}</div>
                        <img className="real-feel-icon-today" src="/img/realfeelicontoday.svg" alt="RealFeelIconToday"/>
                    </div>
                    <div
                        className="real-feel-condition-today inter-extra-bold-black-24px">{displayTemperature}</div>
                </div>
                <div className="overlap-group4">
                    <div className="ontoday-container-1">
                        <img className="wind-icon-today" src="/img/windicontoday.svg" alt="WindIconToday"/>
                        <div className="wind-condition-today inter-extra-bold-black-24px">{displayWindSpeed}</div>
                    </div>
                    <div className="wind-label-today inter-normal-black-14px">{windlabeltoday}</div>
                </div>
                <div className="uvindex-container">
                    <div className="uv-index-label-today inter-normal-black-14px">{uvindexlabeltoday}</div>
                    <div className="uv-index-condition-today inter-extra-bold-black-24px">{uvindexconditiontoday}</div>
                </div>
                <img className="icon-brightness" src="/img/uvindexicontoday.svg" alt="icon-brightness"/>
            </div>
            <div className="flex-row-4 inter-normal-black-14px">
                <div className="humidity-label-today">{humiditylabeltoday}</div>
                <img className="humidity-icon-today" src="/img/humidityicontoday.svg" alt="HumidityIconToday"/>
                <div className="visibility-label-today">{visibilitylabeltoday}</div>
                <img className="visibility-icon-today" src="/img/visibilityicontoday.svg" alt="VisibilityIconToday"/>
                <div className="precipitation-label-today">{precipitationlabeltoday}</div>
                <img
                    className="precipitation-icon-today"
                    src="/img/precipitationicontoday.svg"
                    alt="PrecipitationIconToday"
                />
            </div>
            <div className="conditiontoday-container inter-extra-bold-black-24px">
                <div className="humidity-condition-today">{humidityconditiontoday}</div>
                <div className="visibility-condition-today">{displayVisibility}</div>
                <div className="precipitation-condition-today">{displayPrecipitation}</div>
            </div>
            <div className="overlap-group-container">
                <div className="overlap-group7">
                    <div className="pressure-container">
                        <img className="pressure-icon-today" src="/img/pressureicontoday.svg" alt="PressureIconToday"/>
                        <div
                            className="pressure-condition-today inter-extra-bold-black-24px">{displayPressure}</div>
                    </div>
                    <div className="pressure-label-today inter-normal-black-14px">{pressurelabeltoday}</div>
                </div>
                <div className="overlap-group6">
                    <div className="ontoday-container">
                        <div className="x-condition-today inter-extra-bold-black-24px">{displaySunrise}</div>
                        <img className="x-icon-today" src="/img/sunseticontoday.svg" alt="SunriseIconToday"/>
                    </div>
                    <div className="place inter-normal-black-14px">{place1}</div>
                </div>
                <div className="overlap-group5">
                    <div className="ontoday-container">
                        <div className="x-condition-today inter-extra-bold-black-24px">{displaySunset}</div>
                        <img className="x-icon-today" src="/img/sunseticontoday.svg" alt="SunsetIconToday"/>
                    </div>
                    <div className="place-1 inter-normal-black-14px">{place2}</div>
                </div>
            </div>
            <div>
                <button className="testbtn" onClick={handleTemperatureConversion}>Temp</button>
                <button className="testbtn" onClick={handleWindSpeedConversion}>Wind</button>
                <button className="testbtn" onClick={handleVisibilityConversion}>Visibility</button>
                <button className="testbtn" onClick={handlePrecipitationUnit}>Precipitation</button>
                <button className="testbtn" onClick={handlePressureUnit}>Pressure</button>
            </div>


        </div>
    );
}

export default DetailsComponent;
