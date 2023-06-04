import React from "react";

function DetailsComponent(props) {
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

    return (
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
    );
}

export default DetailsComponent;
