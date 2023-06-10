import React from "react";

function SliderComponent(props) {
    const {
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
    } = props;

    return (
        <div className="hourly">
            <div className="overlap-group12">
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <div className="s-label bakbakone-normal-black-20px">{todayslabelforgrid}</div>
                </div>
                <img className="right-icon" src="/img/right-icon.svg" alt="Right-icon" />
                <img className="left-icon" src="/img/left-icon.svg" alt="Left-icon" />
            </div>
        </div>
    );
}

export default SliderComponent;