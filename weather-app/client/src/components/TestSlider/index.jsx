import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useSelector} from "react-redux";

function TestSliderComponent() {
    const currentLocation = useSelector((state) => state.currentLocation);
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);
    const forecastHistory = useSelector((state) => state.forecastHistory);
    const isFetchingForecastHistory = useSelector((state) => state.isFetchingForecastHistory);

    const [hourlyData, setHourlyData] = useState([]);

    // const hourlyData = [];


    useEffect(() => {
        console.log("Forecast History: ", forecastHistory);
        console.log("Forecast: ", forecastHistory.forecast);
        console.log("Forecast Day: ", forecastHistory.forecast.forecastday[2]);
        console.log("Forecast Hour: ", forecastHistory.forecast.forecastday[0].hour[0].time);
        if (forecastHistory) {
            const newHourlyData = [];
            // console.log("SPLIT!: ", forecastHistory.forecast.forecastday[2]);

            // const arraySize = forecastHistory.forecast.forecastday.length;
            // const daySize = forecastHistory.forecast.forecastday.
            for (let i = 0; i < forecastHistory.forecast.forecastday.length; i++) {
                for (let k = 0; k < forecastHistory.forecast.forecastday[i].hour.length; k++)
                {
                    const hourData = {
                        time: String(forecastHistory.forecast.forecastday[i].hour[k].time).split(" ")[1],
                        weatherIcon: forecastHistory.forecast.forecastday[i].hour[k].condition.icon,
                        degrees: forecastHistory.forecast.forecastday[i].hour[k].temp_c
                    };
                    newHourlyData.push(hourData);
                }
            }
            setHourlyData(newHourlyData);
        }
    }, [forecastHistory]);

    const responsive = {
        // Define the responsive configurations for different screen sizes
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 12, // Number of items to show on desktop
            slidesToSlide: 3, // Number of slides to scroll per action
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 6, // Number of items to show on tablet
            slidesToSlide: 2, // Number of slides to scroll per action
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1, // Number of items to show on mobile
            slidesToSlide: 1, // Number of slides to scroll per action
        },
    };

    if (isFetchingCurrentLocation || isFetchingWeatherInformation || isFetchingForecastHistory) {
        return <div>LOADING...</div>;
    }

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            partialVisbile={false}
            arrows={true}
            centerMode={true}

            containerClass={"hourly1"}
            itemClass={"itemclass1"}
            responsive={responsive}>
            {hourlyData.map((data, index) => (
                <div key={index} className="overlap-group111">
                    <div className="time">{data.time}</div>
                    <img
                        className="weather-icon"
                        src={data.weatherIcon}
                        alt="Weather Icon"
                    />
                    <div className="degrees">{data.degrees}&deg;C</div>
                </div>
            ))}
        </Carousel>
    );
}

export default TestSliderComponent;