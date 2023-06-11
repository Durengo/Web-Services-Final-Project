import React, {useEffect, useState} from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import "../MonthlyWeekly/X2.css";
import {useDispatch, useSelector} from "react-redux";

const WeatherGrid = () => {
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


    // Mock weather data
    const weatherData = [
        { date: '2023-05-01', temperature: 20, forecast: 'sunny' },
        { date: '2023-05-02', temperature: 18, forecast: 'cloudy' },
        { date: '2023-05-03', temperature: 15, forecast: 'sunny' },
        { date: '2023-05-04', temperature: 10, forecast: 'snowy' },
        { date: '2023-05-05', temperature: 22, forecast: 'sunny' },
        { date: '2023-05-06', temperature: 17, forecast: 'rainy' },
        { date: '2023-05-07', temperature: 14, forecast: 'cloudy' },
        { date: '2023-05-08', temperature: 16, forecast: 'sunny' },
    ];

    // Function to render custom weather icons based on the forecast
    const renderWeatherIcon = (forecast) => {
        if (forecast === 'sunny') {
            return <img src="/img/sunny-icon.png" alt="Sunny" />;
        } else if (forecast === 'cloudy') {
            return <img src="/img/partly-cloud-icon.png" alt="Cloudy" />;
        } else if (forecast === 'snowy') {
            return <img src="/img/sunny-icon.png" alt="Snowy" />;
        } else if (forecast === 'rainy') {
            return <img src="/img/partly-cloud-icon.png" alt="Rainy" />;
        } else {
            return null; // Handle unknown forecast values or default case
        }
    };

    // Custom styled components for the grid
    const StyledPaper = styled(Paper)`
    padding: 16px;
    text-align: center;
  `;

    if (isFetchingCurrentLocation || isFetchingWeatherInformation) {
        return <div>LOADING...</div>;
    }

    // dayName: forecastHistory.forecast.forecastday[i].date,
    //     weatherIcon: forecastHistory.forecast.forecastday[i].day.condition.icon,
    //     weatherInfo: forecastHistory.forecast.forecastday[i].day.condition.text,
    //     degreesMin: forecastHistory.forecast.forecastday[i].day.mintemp_c,
    //     degreesMax: forecastHistory.forecast.forecastday[i].day.maxtemp_c,

    return (
        <Grid container spacing={2}>
            {hourlyData.map((data) => (
                <Grid item key={data.date} xs={12} sm={6} md={4} lg={3}>
                    <Paper className="weather-card"> {/* Apply the CSS class */}
                        <h3>{data.dayName}</h3>
                        <img src={data.weatherIcon}/>
                        <p>{data.degreesMax}°</p>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

// {renderWeatherIcon(data.forecast)}

export default WeatherGrid;