import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import "../MonthlyWeekly/X2.css";

const WeatherGrid = () => {
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

    return (
        <Grid container spacing={2}>
            {weatherData.map((data) => (
                <Grid item key={data.date} xs={12} sm={6} md={4} lg={3}>
                    <Paper className="weather-card"> {/* Apply the CSS class */}
                        <h3>{data.date}</h3>
                        {renderWeatherIcon(data.forecast)}
                        <p>{data.temperature}°</p>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default WeatherGrid;