import React, {useEffect, useRef, useState} from "react";
import "./X2.css";
import DetailsComponent from "../Details";
import {weatherMainData} from "../../js/App";
import CurrentConditionsComponent from "../CurrentConditions";
import {useDispatch, useSelector} from "react-redux";
import {setDateToday} from "../../js/setDateToday";
import {setSessionUsingIp} from "../../redux/actions/session";
import {fetchWeatherInformationByCoordinates, fetchWeatherInformationByIP} from "../../js/fetchWeatherInformation";
import DayForecast from "../DayForecast";
import WeatherGrid from "../ForecastTable";
import {
    setMapCoordinates,
    setMapCoordinatesFirstTime,
    setPreviousMapCoordinates
} from "../../redux/actions/mapCoordinatesActions";
import {
    fetchForecastHistoryByCoordinatesAhead,
    fetchForecastHistoryByCoordinatesAndDays
} from "../../js/fetchForecastHistory";

function X2(props) {
    const dispatch = useDispatch();
    const isMountedRef = useRef(false);

    // Setting Date For States
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const currentLocation = useSelector((state) => state.currentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);

    const sessionIp = useSelector((state) => state.sessionIp);
    const sessionDateToday = useSelector((state) => state.sessionDateToday);
    const isUpdatingSessionDateToday = useSelector((state) => state.isUpdatingSessionDateToday);
    const sessionUsingIp = useSelector((state) => state.sessionUsingIp);

    const mapCoordinates = useSelector((state) => state.mapCoordinates);
    const previousMapCoordinates = useSelector((state) => state.previousMapCoordinates);
    const mapCoordinatesFirstTime = useSelector((state) => state.mapCoordinatesFirstTime);
    const isFetchingMapCoordinates = useSelector((state) => state.isFetchingMapCoordinates);

    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);

    const calledOnce = useRef(false);

    const forecastHistory = useSelector((state) => state.forecastHistory);
    const isFetchingForecastHistory = useSelector((state) => state.isFetchingForecastHistory);
    const temperatureUnit = useSelector((state) => state.temperatureUnit);
    const sessionTodayDate = useSelector((state) => state.sessionDateToday);

    const [todayMonth, setTodayMonth] = useState(null);

    useEffect(() => {
        if (!isMountedRef.current) {
            dispatch(setDateToday());
            dispatch(setSessionUsingIp(false));
            isMountedRef.current = true;
        }
    }, []);

    useEffect(() => {
        if (sessionUsingIp) {
            dispatch(fetchWeatherInformationByIP());
            dispatch(setSessionUsingIp(false));
        }
    }, [sessionUsingIp]);

    useEffect(() => {
        if (weatherInformation && !isFetchingCurrentLocation && !isFetchingWeatherInformation) {
            if ((previousMapCoordinates !== null && mapCoordinates !== null)) {
                dispatch(setMapCoordinates(weatherInformation.location.lat, weatherInformation.location.lon));
                dispatch(setPreviousMapCoordinates(weatherInformation.location.lat, weatherInformation.location.lon));
            } else if ((previousMapCoordinates.latitude !== mapCoordinates.latitude)
                && (previousMapCoordinates.longitude !== mapCoordinates.longitude)) {
                dispatch(setPreviousMapCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
                dispatch(setMapCoordinates(weatherInformation.location.lat, weatherInformation.location.lon));
            }
        }
    }, [weatherInformation, isFetchingCurrentLocation, isFetchingWeatherInformation]);

    useEffect(() => {
        if (mapCoordinatesFirstTime) {
            dispatch(fetchWeatherInformationByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
            dispatch(setMapCoordinatesFirstTime(false));
        }
    }, [mapCoordinatesFirstTime]);

    useEffect(() => {
        if (mapCoordinates && !isFetchingMapCoordinates) {
            console.log(`New Map Coordinates: ${mapCoordinates.latitude}:${mapCoordinates.longitude}`);
            console.log(`Previous Map Coordinates: ${previousMapCoordinates.latitude}:${previousMapCoordinates.longitude}`);
            if (mapCoordinatesFirstTime) {
                dispatch(fetchWeatherInformationByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
                dispatch(setMapCoordinatesFirstTime(false));
            }
        }
    }, [mapCoordinates, isFetchingMapCoordinates]);

    useEffect(() => {
        if (sessionDateToday && !isUpdatingSessionDateToday) {
            console.log(`Today day set to: ${sessionDateToday.year}-${sessionDateToday.month}-${sessionDateToday.day}`);
        }
    }, [sessionDateToday, isUpdatingSessionDateToday]);

    useEffect(() => {
        if (weatherInformation && sessionDateToday && !isFetchingWeatherInformation && !isUpdatingSessionDateToday) {
            if (sessionUsingIp) {
                //dispatch(fetchForecastHistoryByIp(`${formattedDate}`, `${formattedDateAhead}`));
            } else {
                //dispatch(fetchForecastHistoryByCoordinatesAhead(mapCoordinates.latitude, mapCoordinates.longitude, `${formattedDate}`, `${formattedDate}`));
                // dispatch(fetchForecastHistoryByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude, `${formattedDate}`, `${formattedDateAhead}`));
                dispatch(fetchForecastHistoryByCoordinatesAndDays(mapCoordinates.latitude, mapCoordinates.longitude, 14));

            }
        }
    }, [dispatch, weatherInformation, isFetchingWeatherInformation, sessionDateToday, isUpdatingSessionDateToday]);

    useEffect(() => {
       if(forecastHistory)
       {
           let dateParts = String(forecastHistory.forecast.forecastday[0].date).split("-");
           let monthPart = parseInt(dateParts[1]);
           let currentDate = new Date(0, monthPart - 1);
           let monthName = currentDate.toLocaleString('en-US', { month: 'long' });
           console.log(`MONTH SET TO: ${monthName}`);
           setTodayMonth(monthName);
       }
    }, [forecastHistory]);

    if (isFetchingCurrentLocation || isFetchingWeatherInformation || isFetchingForecastHistory) {
        return <div>LOADING...</div>;
    }

    const {
        spanText65,
        spanText66,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="x2 screen">
                <div className="flex-row-13">
                    <CurrentConditionsComponent/>
                    <DetailsComponent {...weatherMainData}/>
                </div>
                <div className="frame-container50">
                    <DayForecast />
                    <div className="frame-51">
                        <div className="overlap-group51">
                            <div className="overlap-group-52">
                                <div className="month-container">
                                    <div className="title-month-forecast inter-bold-storm-dust-20px">
                                        <span className="inter-bold-storm-dust-20px">{spanText65}</span>
                                    </div>
                                    <div className="title-month inter-normal-black-18-2px">
                                        <span className="inter-normal-black-18-2px">{todayMonth}</span>
                                    </div>
                                </div>
                                <WeatherGrid />
                            </div>
                            <div className="x7day_temp inter-extra-bold-black-16-6px">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default X2;