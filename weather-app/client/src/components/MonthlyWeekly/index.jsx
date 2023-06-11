import React from "react";
import "./X2.css";
import DetailsComponent from "../Details";
import {weatherMainData} from "../../js/App";
import CurrentConditionsComponent from "../CurrentConditions";
import WeatherGrid from "../ForecastTable";

function X2(props) {
    const {
        line,
        spanText29,
        spanText30,
        line6,
        spanText31,
        line7,
        spanText32,
        line8,
        spanText33,
        line9,
        spanText34,
        line10,
        spanText35,
        line11,
        spanText36,
        spanText37,
        spanText38,
        spanText39,
        spanText40,
        spanText41,
        spanText42,
        spanText43,
        spanText44,
        spanText45,
        spanText46,
        spanText47,
        spanText48,
        spanText49,
        spanText50,
        spanText51,
        spanText52,
        spanText53,
        spanText54,
        spanText55,
        spanText56,
        spanText57,
        spanText58,
        spanText59,
        spanText60,
        spanText61,
        spanText62,
        spanText63,
        spanText64,
        weekIcons,
        spanText65,
        spanText66,
    } = props;
    return (
        <div className="container-center-horizontal">
            <div className="x2 screen">

                <img className="line-23" src={line} alt="Line" />
                <div className="flex-row-13">
                    <CurrentConditionsComponent {...weatherMainData}/>
                    <DetailsComponent />
                </div>
                <div className="frame-container50">
                    <div className="frame-50">
                        <div className="overlap-group50 inter-extra-bold-black-14px">
                            <div className="overlap-group51">
                                <div className="title-7-day-forecast inter-bold-black-20px">
                                    <span className="inter-bold-black-20px">{spanText29}</span>
                                </div>
                                <div className="today-2 inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText30}</span>
                                </div>
                                <img className="line-6" src={line6} alt="Line 6" />
                                <div className="tue inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText31}</span>
                                </div>
                                <img className="line50" src={line7} alt="Line 7" />
                                <div className="wed inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText32}</span>
                                </div>
                                <img className="line50" src={line8} alt="Line 8" />
                                <div className="thu inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText33}</span>
                                </div>
                                <img className="line-51" src={line9} alt="Line 9" />
                                <div className="fri inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText34}</span>
                                </div>
                                <img className="line-51" src={line10} alt="Line 10" />
                                <div className="sat inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText35}</span>
                                </div>
                                <img className="line-11" src={line11} alt="Line 11" />
                                <div className="place-2 inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText36}</span>
                                </div>
                            </div>
                            <div className="x1day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText37}</span>
                                <span className="inter-medium-black-14px">{spanText38}</span>
                                <span className="inter-bold-black-14px">{spanText39}</span>
                            </div>
                            <div className="x2day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText40}</span>
                                <span className="inter-medium-black-14px">{spanText41}</span>
                                <span className="inter-bold-black-14px">{spanText42}</span>
                            </div>
                            <div className="x3day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText43}</span>
                                <span className="inter-medium-black-14px">{spanText44}</span>
                                <span className="inter-bold-black-14px">{spanText45}</span>
                            </div>
                            <div className="x4day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText46}</span>
                                <span className="inter-medium-black-14px">{spanText47}</span>
                                <span className="inter-bold-black-14px">{spanText48}</span>
                            </div>
                            <div className="x5day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText49}</span>
                                <span className="inter-medium-black-14px">{spanText50}</span>
                                <span className="inter-bold-black-14px">{spanText51}</span>
                            </div>
                            <div className="x6day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText52}</span>
                                <span className="inter-medium-black-14px">{spanText53}</span>
                                <span className="inter-bold-black-14px">{spanText54}</span>
                            </div>
                            <div className="x7day-temp">
                                <span className="inter-extra-bold-black-14px">{spanText55}</span>
                                <span className="inter-medium-black-14px">{spanText56}</span>
                                <span className="inter-bold-black-14px">{spanText57}</span>
                            </div>
                            <div className="sunny">
                                <span className="inter-extra-bold-black-14px">{spanText58}</span>
                            </div>
                            <div className="cloudy">
                                <span className="inter-extra-bold-black-14px">{spanText59}</span>
                            </div>
                            <div className="cloudy-1">
                                <span className="inter-extra-bold-black-14px">{spanText60}</span>
                            </div>
                            <div className="rainy">
                                <span className="inter-extra-bold-black-14px">{spanText61}</span>
                            </div>
                            <div className="rainy-1">
                                <span className="inter-extra-bold-black-14px">{spanText62}</span>
                            </div>
                            <div className="rainy-2">
                                <span className="inter-extra-bold-black-14px">{spanText63}</span>
                            </div>
                            <div className="cloudy-2">
                                <span className="inter-extra-bold-black-14px">{spanText64}</span>
                            </div>
                            <img className="week-icons" src={weekIcons} alt="week icons" />
                        </div>
                    </div>
                    <div className="frame-51">
                        <div className="overlap-group51">
                            <div className="overlap-group-52">
                                <div className="month-container">
                                    <div className="title-month-forecast inter-bold-storm-dust-20px">
                                        <span className="inter-bold-storm-dust-20px">{spanText65}</span>
                                    </div>
                                    <div className="title-month inter-normal-black-18-2px">
                                        <span className="inter-normal-black-18-2px">{spanText66}</span>
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