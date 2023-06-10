import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },
        { time: "1 AM", weatherIcon: "img/mostly-sunny-n-.png", degrees: 19 },


    ];
    const responsive = {
        // Define the responsive configurations for different screen sizes
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12, // Number of items to show on desktop
            slidesToSlide: 3, // Number of slides to scroll per action
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6, // Number of items to show on tablet
            slidesToSlide: 2, // Number of slides to scroll per action
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Number of items to show on mobile
            slidesToSlide: 1, // Number of slides to scroll per action
        },
    };

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