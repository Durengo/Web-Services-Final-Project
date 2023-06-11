import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSunriseAndSunset} from "../../js/conversion";
import myLine from "../../static/img1/line-6-1@2x.png";
import "./DayForecast.css";
function DayForecast(props) {
    const dispatch = useDispatch();
    const currentLocation = useSelector((state) => state.currentLocation);
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);
    const isChangingUnits = useSelector((state) => state.isChangingUnits);
    const temperatureUnit = useSelector((state) => state.temperatureUnit);
    const forecastHistory = useSelector((state) => state.forecastHistory);
    const isFetchingForecastHistory = useSelector((state) => state.isFetchingForecastHistory);
    const sessionTodayDate = useSelector((state) => state.sessionDateToday);
    const isUpdatingSessionDateToday = useSelector((state) => state.isUpdatingSessionDateToday);
    const [hourlyData, setHourlyData] = useState([]);
    // let [internalCount, setInternalCount] = useState(0);
    let internalCount = 0;

    useEffect(() => {
        if (forecastHistory && temperatureUnit !== null && sessionTodayDate && !isUpdatingSessionDateToday) {
            const newHourlyData = [];
            for (let i = 0; i < forecastHistory.forecast.forecastday.length; i++) {
                let hourData
                if (temperatureUnit) {
                    hourData = {
                        dayName: forecastHistory.forecast.forecastday[i].date,
                        weatherIcon: forecastHistory.forecast.forecastday[i].day.condition.icon,
                        weatherInfo: forecastHistory.forecast.forecastday[i].day.condition.text,
                        degreesMin: forecastHistory.forecast.forecastday[i].day.mintemp_c,
                        degreesMax: forecastHistory.forecast.forecastday[i].day.maxtemp_c,
                    };
                } else {
                    hourData = {
                        dayName: forecastHistory.forecast.forecastday[i].date,
                        weatherIcon: forecastHistory.forecast.forecastday[i].day.condition.icon,
                        weatherInfo: forecastHistory.forecast.forecastday[i].day.condition.text,
                        degreesMin: forecastHistory.forecast.forecastday[i].day.mintemp_f,
                        degreesMax: forecastHistory.forecast.forecastday[i].day.maxtemp_f,
                    };
                }

                newHourlyData.push(hourData);
                if(internalCount === 6)
                {
                    internalCount = 0;
                    break;
                }
                internalCount = internalCount + 1;
                // for (let k = 0; k < forecastHistory.forecast.forecastday[i].hour.length; k++) {
                //     let hourData
                //     if (temperatureUnit) {
                //         hourData = {
                //             dayName: forecastHistory.forecast.forecastday[i].date,
                //             weatherIcon: forecastHistory.forecast.forecastday[i].day.condition.icon,
                //             weatherInfo: forecastHistory.forecast.forecastday[i].day.condition.text,
                //             degreesMin: forecastHistory.forecast.forecastday[i].day.mintemp_c,
                //             degreesMax: forecastHistory.forecast.forecastday[i].day.maxtemp_c,
                //         };
                //     } else {
                //         hourData = {
                //             dayName: forecastHistory.forecast.forecastday[i].date,
                //             weatherIcon: forecastHistory.forecast.forecastday[i].day.condition.icon,
                //             weatherInfo: forecastHistory.forecast.forecastday[i].day.condition.text,
                //             degreesMin: forecastHistory.forecast.forecastday[i].day.mintemp_f,
                //             degreesMax: forecastHistory.forecast.forecastday[i].day.maxtemp_f,
                //         };
                //     }
                //
                //     newHourlyData.push(hourData);
                // }
            }
            setHourlyData(newHourlyData);
        }
    }, [forecastHistory, temperatureUnit, sessionTodayDate, isUpdatingSessionDateToday]);

    if (isFetchingCurrentLocation || isFetchingWeatherInformation) {
        return <div>LOADING...</div>;
    }

    return (
        <div className="frame-50">
            {console.log(`${hourlyData}`)}
            {console.log(`${forecastHistory}`)}
            <div className="overlap-group50 inter-extra-bold-black-14px">
                <div className="overlap-group51">
                    <div className="title-7-day-forecast inter-bold-black-20px">
                        <span className="inter-bold-black-20px">7-DAY FORECAST</span>
                    </div>
                    <div className="card-list">
                        {hourlyData.map((data, index) => (
                            <div key={index} className="card">
                                <div className="day-name">{data.dayName}</div>
                                <img className="weather-icon" src={data.weatherIcon} alt="Weather Icon" />
                                <div className="weather-info">{data.weatherInfo}</div>
                                <div className="degrees-min">{data.degreesMin} {temperatureUnit === true ? "⁰C" : "F"}</div>
                                <div className="degrees-max">{data.degreesMax} {temperatureUnit === true ? "⁰C" : "F"}</div>
                                <img className="line" src={myLine} alt="Line" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DayForecast;
