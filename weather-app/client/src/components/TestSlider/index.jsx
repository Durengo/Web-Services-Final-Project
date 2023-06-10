import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function TestSliderComponent() {
    const hourlyData = [
        { time: "12 AM", weatherIcon: "img/partly-cloud-icon.png", degrees: 20 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "2 AM", weatherIcon: "img/sunny-icon.png", degrees: 18 },
        { time: "12 AM", weatherIcon: "img/partly-cloud-icon.png", degrees: 20 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "2 AM", weatherIcon: "img/sunny-icon.png", degrees: 18 },
        { time: "12 AM", weatherIcon: "img/partly-cloud-icon.png", degrees: 20 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "2 AM", weatherIcon: "img/sunny-icon.png", degrees: 18 },
        { time: "12 AM", weatherIcon: "img/partly-cloud-icon.png", degrees: 20 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "2 AM", weatherIcon: "img/sunny-icon.png", degrees: 18 },
        { time: "12 AM", weatherIcon: "img/partly-cloud-icon.png", degrees: 20 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "2 AM", weatherIcon: "img/sunny-icon.png", degrees: 18 },
        { time: "12 AM", weatherIcon: "img/partly-cloud-icon.png", degrees: 20 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },


    ];
    const slidesToShow = 11;
    return (
        <div className="hourly1">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={100 / slidesToShow}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="arrow-prev"
                        />
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="arrow-next"
                        />
                    )
                }
            >
                {hourlyData.map((data, index) => (
                    <div key={index} className="overlap-group111">
                        <div className="time">{data.time}</div>
                        <img className="weather-icon" src={data.weatherIcon} alt="Weather Icon" />
                        <div className="degrees">{data.degrees}&deg;C</div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default TestSliderComponent;