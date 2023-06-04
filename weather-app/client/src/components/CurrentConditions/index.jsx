import React from "react";

function CurrentConditionsComponent(props) {
    const {
        citytoday,
        currentregiontoday,
        conditionicontoday,
        feelslikeconditiontoday,
        textconditiontoday,
        spanText1,
        spanText2,
    } = props;

    return (
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
    );
}

export default CurrentConditionsComponent;
