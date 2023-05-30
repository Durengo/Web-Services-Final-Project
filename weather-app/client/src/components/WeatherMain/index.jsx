import React from "react";
import "./WeatherMain.css";

function WeatherMain(props) {
    const {
        todaydate,
        today,
        weekmo,
        profileCircle,
        citytoday,
        currentregiontoday,
        conditionicontoday,
        feelslikeconditiontoday,
        textconditiontoday,
        spanText1,
        spanText2,
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
        overlapGroup,
        todayslabelforgrid,
        partlyCloudIcon1,
        partlyCloudIcon2,
        partlyCloudIcon3,
        partlyCloudIcon4,
        partlyCloudIcon5,
        partlyCloudIcon6,
        sunnyIcon1,
        sunnyIcon2,
        cloudyN1,
        cloudyN2,
        mostlySunnyN1,
        mostlySunnyN2,
        time1,
        time6,
        time2,
        time3,
        time4,
        time5,
        time7,
        time8,
        time9,
        time10,
        time11,
        time12,
        spanText3,
        spanText4,
        spanText5,
        spanText6,
        spanText7,
        spanText8,
        spanText9,
        spanText10,
        spanText11,
        spanText12,
        spanText13,
        spanText14,
        spanText15,
        spanText16,
        spanText17,
        spanText18,
        spanText19,
        spanText20,
        spanText21,
        spanText22,
        spanText23,
        spanText24,
        spanText25,
        spanText26,
        textLabelMap,
        map,
    } = props;

    return (
        <div className="weather-site1">
            <div className="flex-row">
                <div className="today-date">{todaydate}</div>
                <div className="today">
                    <div className="overlap-group14">
                        <div className="today-1">{today}</div>
                    </div>
                </div>
                <div className="week-month">
                    <div className="overlap-group13">
                        <div className="week-mo">{weekmo}</div>
                    </div>
                </div>
                <img className="profile-circle" src={profileCircle} alt="profile-circle" />
                <img className="settings" src="/img/settings.svg" alt="settings" />
            </div>
            <img className="line" src="/img/line.svg" alt="Line" />
            <div className="flex-row-1">
                <div className="current-conditions">
                    <div className="overlap-group11">
                        <div className="overlap-group10">
                            <div className="today-container">
                                <h1 className="city-today">{citytoday}</h1>
                                <div className="current-region-today">{currentregiontoday}</div>
                            </div>
                            <div className="condition-container">
                                <img className="condition-icon-today" src={conditionicontoday} alt="ConditionIconToday" />
                                <div className="feels-like-condition-today">{feelslikeconditiontoday}</div>
                            </div>
                            <div className="text-condition-today">{textconditiontoday}</div>
                        </div>
                        <div className="flex-row-2">
                            <div className="temperature-today valign-text-bottom inter-normal-midnight-blue-60px">
                <span>
                  <span className="inter-normal-midnight-blue-60px">{spanText1}</span>
                  <span className="span1">{spanText2}</span>
                </span>
                            </div>
                            <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="flex-row-3">
                        <div className="flex-col">
                            <div className="s-label bakbakone-normal-black-20px">{detailsLabel}</div>
                            <div className="realfeel-container">
                                <div className="real-feel-label-today inter-normal-black-14px">{realfeellabeltoday}</div>
                                <img className="real-feel-icon-today" src="/img/realfeelicontoday.svg" alt="RealFeelIconToday" />
                            </div>
                            <div className="real-feel-condition-today inter-extra-bold-black-24px">{realfeelconditiontoday}</div>
                        </div>
                        <div className="overlap-group4">
                            <div className="ontoday-container-1">
                                <img className="wind-icon-today" src="/img/windicontoday.svg" alt="WindIconToday" />
                                <div className="wind-condition-today inter-extra-bold-black-24px">{windconditiontoday}</div>
                            </div>
                            <div className="wind-label-today inter-normal-black-14px">{windlabeltoday}</div>
                        </div>
                        <div className="uvindex-container">
                            <div className="uv-index-label-today inter-normal-black-14px">{uvindexlabeltoday}</div>
                            <div className="uv-index-condition-today inter-extra-bold-black-24px">{uvindexconditiontoday}</div>
                        </div>
                        <img className="icon-brightness" src="/img/uvindexicontoday.svg" alt="icon-brightness" />
                    </div>
                    <div className="flex-row-4 inter-normal-black-14px">
                        <div className="humidity-label-today">{humiditylabeltoday}</div>
                        <img className="humidity-icon-today" src="/img/humidityicontoday.svg" alt="HumidityIconToday" />
                        <div className="visibility-label-today">{visibilitylabeltoday}</div>
                        <img className="visibility-icon-today" src="/img/visibilityicontoday.svg" alt="VisibilityIconToday" />
                        <div className="precipitation-label-today">{precipitationlabeltoday}</div>
                        <img
                            className="precipitation-icon-today"
                            src="/img/precipitationicontoday.svg"
                            alt="PrecipitationIconToday"
                        />
                    </div>
                    <div className="conditiontoday-container inter-extra-bold-black-24px">
                        <div className="humidity-condition-today">{humidityconditiontoday}</div>
                        <div className="visibility-condition-today">{visibilityconditiontoday}</div>
                        <div className="precipitation-condition-today">{precipitationconditiontoday}</div>
                    </div>
                    <div className="overlap-group-container">
                        <div className="overlap-group7">
                            <div className="pressure-container">
                                <img className="pressure-icon-today" src="/img/pressureicontoday.svg" alt="PressureIconToday" />
                                <div className="pressure-condition-today inter-extra-bold-black-24px">{pressureconditiontoday}</div>
                            </div>
                            <div className="pressure-label-today inter-normal-black-14px">{pressurelabeltoday}</div>
                        </div>
                        <div className="overlap-group6">
                            <div className="ontoday-container">
                                <div className="x-condition-today inter-extra-bold-black-24px">{sunriseconditiontoday}</div>
                                <img className="x-icon-today" src="/img/sunseticontoday.svg" alt="SunriseIconToday" />
                            </div>
                            <div className="place inter-normal-black-14px">{place1}</div>
                        </div>
                        <div className="overlap-group5">
                            <div className="ontoday-container">
                                <div className="x-condition-today inter-extra-bold-black-24px">{sunsetconditiontoday}</div>
                                <img className="x-icon-today" src="/img/sunseticontoday.svg" alt="SunsetIconToday" />
                            </div>
                            <div className="place-1 inter-normal-black-14px">{place2}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hourly">
                <div className="overlap-group12">
                    <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                        <div className="s-label bakbakone-normal-black-20px">{todayslabelforgrid}</div>
                    </div>
                    <img className="partly-cloud-icon" src={partlyCloudIcon1} alt="Partly-cloud-icon" />
                    <img className="partly-cloud-icon-1" src={partlyCloudIcon2} alt="Partly-cloud-icon" />
                    <img className="partly-cloud-icon-2" src={partlyCloudIcon3} alt="Partly-cloud-icon" />
                    <img className="partly-cloud-icon-3" src={partlyCloudIcon4} alt="Partly-cloud-icon" />
                    <img className="partly-cloud-icon-4" src={partlyCloudIcon5} alt="Partly-cloud-icon" />
                    <img className="partly-cloud-icon-5" src={partlyCloudIcon6} alt="Partly-cloud-icon" />
                    <img className="sunny-icon" src={sunnyIcon1} alt="Sunny-icon" />
                    <img className="sunny-icon-1" src={sunnyIcon2} alt="Sunny-icon" />
                    <img className="cloudyn" src={cloudyN1} alt="Cloudy(n)" />
                    <img className="cloudyn-1" src={cloudyN2} alt="Cloudy(n)" />
                    <img className="mostly-sunnyn" src={mostlySunnyN1} alt="Mostly-Sunny(n)" />
                    <img className="mostly-sunnyn-1" src={mostlySunnyN2} alt="Mostly-Sunny(n)" />
                    <img className="right-icon" src="/img/right-icon.svg" alt="Right-icon" />
                    <img className="left-icon" src="/img/left-icon.svg" alt="Left-icon" />
                    <div className="time1 inter-normal-midnight-blue-14px">{time1}</div>
                    <div className="time6 inter-normal-midnight-blue-14px">{time6}</div>
                    <div className="time2 inter-normal-midnight-blue-14px">{time2}</div>
                    <div className="time3 inter-normal-midnight-blue-14px">{time3}</div>
                    <div className="time4 inter-normal-midnight-blue-14px">{time4}</div>
                    <div className="time5 inter-normal-midnight-blue-14px">{time5}</div>
                    <div className="time7 inter-normal-midnight-blue-14px">{time7}</div>
                    <div className="time8 inter-normal-midnight-blue-14px">{time8}</div>
                    <div className="time9 inter-normal-midnight-blue-14px">{time9}</div>
                    <div className="time10 inter-normal-midnight-blue-14px">{time10}</div>
                    <div className="time11 inter-normal-midnight-blue-14px">{time11}</div>
                    <div className="time12 inter-normal-midnight-blue-14px">{time12}</div>
                    <div className="degree1 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText3}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText4}</span>
            </span>
                    </div>
                    <div className="degree2 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText5}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText6}</span>
            </span>
                    </div>
                    <div className="degree3 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText7}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText8}</span>
            </span>
                    </div>
                    <div className="degree4 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText9}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText10}</span>
            </span>
                    </div>
                    <div className="degree5 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText11}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText12}</span>
            </span>
                    </div>
                    <div className="degree6 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText13}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText14}</span>
            </span>
                    </div>
                    <div className="degree7 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText15}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText16}</span>
            </span>
                    </div>
                    <div className="degree8 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText17}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText18}</span>
            </span>
                    </div>
                    <div className="degree9 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText19}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText20}</span>
            </span>
                    </div>
                    <div className="degree10 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText21}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText22}</span>
            </span>
                    </div>
                    <div className="degree11 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText23}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText24}</span>
            </span>
                    </div>
                    <div className="degree12 valign-text-bottom inter-semi-bold-midnight-blue-25px">
            <span>
              <span className="inter-semi-bold-midnight-blue-25px">{spanText25}</span>
              <span className="labelleaurore-normal-midnight-blue-22px">{spanText26}</span>
            </span>
                    </div>
                </div>
            </div>
            <div className="text-label-map">{textLabelMap}</div>
            <img className="map" src={map} alt="Map" />
        </div>
    );
}

export default WeatherMain;
