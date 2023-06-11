import React from "react";
import "./X2.css";

function X2(props) {
    const {
        spanText1,
        spanText2,
        spanText3,
        profileCircle,
        settings,
        line,
        spanText4,
        spanText5,
        conditionicontoday,
        spanText6,
        spanText7,
        spanText8,
        spanText9,
        line1,
        spanText10,
        spanText11,
        realfeelicontoday,
        spanText12,
        windicontoday,
        spanText13,
        spanText14,
        spanText15,
        spanText16,
        iconBrightness,
        spanText17,
        humidityicontoday,
        spanText18,
        visibilityicontoday,
        spanText19,
        precipitationicontoday,
        spanText20,
        spanText21,
        spanText22,
        pressureicontoday,
        spanText23,
        spanText24,
        spanText25,
        sunriseicontoday,
        spanText26,
        spanText27,
        sunseticontoday,
        spanText28,
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
        line21,
        line19,
        line20,
        line22,
        line13,
        line14,
        line16,
        line15,
        line18,
        line17,
        x1DayCondition,
        x8DayCondition,
        x15DayCondition,
        x22DayCondition,
        x2DayCondition,
        x9DayCondition,
        x16DayCondition,
        x23DayCondition,
        x3DayCondition,
        x10DayCondition,
        x17DayCondition,
        x24DayCondition,
        x4DayCondition,
        x11DayCondition,
        x18DayCondition,
        x5DayCondition,
        x12DayCondition,
        x19DayCondition,
        x6DayCondition,
        x13DayCondition,
        x20DayCondition1,
        x7DayCondition,
        x14DayCondition,
        x20DayCondition2,
        x25DayCondition,
        x26DayCondition,
        x27DayCondition,
        x28DayCondition,
        x29DayCondition,
        x30DayCondition,
        x31DayCondition,
        spanText67,
        spanText68,
        spanText69,
        spanText70,
        spanText71,
        spanText72,
        spanText73,
        spanText74,
        spanText75,
        spanText76,
        spanText77,
        spanText78,
        spanText79,
        spanText80,
        spanText81,
        spanText82,
        spanText83,
        spanText84,
        spanText85,
        spanText86,
        spanText87,
        spanText88,
        spanText89,
        spanText90,
        spanText91,
        spanText92,
        spanText93,
        spanText94,
        spanText95,
        spanText96,
        spanText97,
        spanText98,
        spanText99,
        spanText100,
        spanText101,
        spanText102,
        spanText103,
        spanText104,
        spanText105,
        spanText106,
        spanText107,
        spanText108,
        spanText109,
        spanText110,
        spanText111,
        spanText112,
        spanText113,
        spanText114,
        spanText115,
        spanText116,
        spanText117,
        spanText118,
        spanText119,
        spanText120,
        spanText121,
        spanText122,
        spanText123,
        spanText124,
        spanText125,
        spanText126,
        spanText127,
        spanText128,
        spanText129,
        spanText130,
        spanText131,
        spanText132,
        spanText133,
        spanText134,
        spanText135,
        spanText136,
        spanText137,
        spanText138,
        spanText139,
        spanText140,
        spanText141,
        spanText142,
        spanText143,
        spanText144,
        spanText145,
        spanText146,
        spanText147,
        spanText148,
        spanText149,
        spanText150,
        spanText151,
        spanText152,
        spanText153,
        spanText154,
        spanText155,
        spanText156,
        spanText157,
        spanText158,
        spanText159,
        spanText160,
        spanText161,
        spanText162,
        spanText163,
        spanText164,
        spanText165,
        spanText166,
        spanText167,
        spanText168,
        spanText169,
        spanText170,
        spanText171,
        spanText172,
        spanText173,
        spanText174,
        spanText175,
        spanText176,
        spanText177,
        spanText178,
        spanText179,
        spanText180,
        spanText181,
        spanText182,
        spanText183,
        spanText184,
        spanText185,
        spanText186,
        spanText187,
        spanText188,
        spanText189,
        spanText190,
    } = props;
    return (
        <div className="container-center-horizontal">
            <div className="x2 screen">
                <div className="flex-row">
                    <div className="today-date inter-medium-black-20px">
                        <span className="inter-medium-black-20px">{spanText1}</span>
                    </div>
                    <div className="today-button">
                        <div className="overlap-group12">
                            <div className="today inter-semi-bold-storm-dust-14px">
                                <span className="inter-semi-bold-storm-dust-14px">{spanText2}</span>
                            </div>
                        </div>
                    </div>
                    <div className="weekmo-button">
                        <div className="overlap-group13">
                            <div className="today-1 inter-semi-bold-storm-dust-14px">
                                <span className="inter-semi-bold-storm-dust-14px">{spanText3}</span>
                            </div>
                        </div>
                    </div>
                    <img className="profile-circle" src={profileCircle} alt="profile-circle" />
                    <img className="settings" src={settings} alt="settings" />
                </div>
                <img className="line-2" src={line} alt="Line" />
                <div className="flex-row-1">
                    <div className="current-conditions">
                        <div className="overlap-group11">
                            <div className="overlap-group10">
                                <div className="today-container">
                                    <h1 className="city-today inter-semi-bold-midnight-blue-71px">
                                        <span className="inter-semi-bold-midnight-blue-71px">{spanText4}</span>
                                    </h1>
                                    <div className="current-region-today inter-normal-black-20px">
                                        <span className="inter-normal-black-20px">{spanText5}</span>
                                    </div>
                                </div>
                                <div className="condition-container">
                                    <img className="condition-icon-today" src={conditionicontoday} alt="ConditionIconToday" />
                                    <div className="feels-like-condition-today inter-semi-bold-midnight-blue-30px">
                                        <span className="inter-semi-bold-midnight-blue-30px">{spanText6}</span>
                                    </div>
                                </div>
                                <div className="text-condition-today inter-light-midnight-blue-20px">
                                    <span className="inter-light-midnight-blue-20px">{spanText7}</span>
                                </div>
                            </div>
                            <div className="flex-row-2">
                                <div className="temperature-today valign-text-bottom inter-normal-midnight-blue-60px">
                    <span>
                      <span className="inter-normal-midnight-blue-60px">{spanText8}</span>
                      <span className="labelleaurore-normal-midnight-blue-55px">{spanText9}</span>
                    </span>
                                </div>
                                <img className="line-1-1" src={line1} alt="Line 1" />
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="flex-row-3">
                            <div className="flex-col">
                                <div className="details-label bakbakone-normal-black-20px">
                                    <span className="bakbakone-normal-black-20px">{spanText10}</span>
                                </div>
                                <div className="realfeel-container">
                                    <div className="real-feel-label-today inter-normal-black-14px">
                                        <span className="inter-normal-black-14px">{spanText11}</span>
                                    </div>
                                    <img className="real-feel-icon-today" src={realfeelicontoday} alt="RealFeelIconToday" />
                                </div>
                                <div className="real-feel-condition-today inter-extra-bold-black-24px">
                                    <span className="inter-extra-bold-black-24px">{spanText12}</span>
                                </div>
                            </div>
                            <div className="overlap-group4">
                                <div className="ontoday-container-1">
                                    <img className="wind-icon-today" src={windicontoday} alt="WindIconToday" />
                                    <div className="wind-condition-today inter-extra-bold-black-24px">
                                        <span className="inter-extra-bold-black-24px">{spanText13}</span>
                                    </div>
                                </div>
                                <div className="wind-label-today inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText14}</span>
                                </div>
                            </div>
                            <div className="uvindex-container">
                                <div className="uv-index-label-today inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText15}</span>
                                </div>
                                <div className="uv-index-condition-today inter-extra-bold-black-24px">
                                    <span className="inter-extra-bold-black-24px">{spanText16}</span>
                                </div>
                            </div>
                            <img className="icon-brightness" src={iconBrightness} alt="icon-brightness" />
                        </div>
                        <div className="flex-row-4 inter-normal-black-14px">
                            <div className="humidity-label-today">
                                <span className="inter-normal-black-14px">{spanText17}</span>
                            </div>
                            <img className="humidity-icon-today" src={humidityicontoday} alt="HumidityIconToday" />
                            <div className="visibility-label-today">
                                <span className="inter-normal-black-14px">{spanText18}</span>
                            </div>
                            <img className="visibility-icon-today" src={visibilityicontoday} alt="VisibilityIconToday" />
                            <div className="precipitation-label-today">
                                <span className="inter-normal-black-14px">{spanText19}</span>
                            </div>
                            <img className="precipitation-icon-today" src={precipitationicontoday} alt="PrecipitationIconToday" />
                        </div>
                        <div className="conditiontoday-container inter-extra-bold-black-24px">
                            <div className="humidity-condition-today">
                                <span className="inter-extra-bold-black-24px">{spanText20}</span>
                            </div>
                            <div className="visibility-condition-today">
                                <span className="inter-extra-bold-black-24px">{spanText21}</span>
                            </div>
                            <div className="precipitation-condition-today">
                                <span className="inter-extra-bold-black-24px">{spanText22}</span>
                            </div>
                        </div>
                        <div className="overlap-group-container">
                            <div className="overlap-group7">
                                <div className="pressure-container">
                                    <img className="pressure-icon-today" src={pressureicontoday} alt="PressureIconToday" />
                                    <div className="pressure-condition-today inter-extra-bold-black-24px">
                                        <span className="inter-extra-bold-black-24px">{spanText23}</span>
                                    </div>
                                </div>
                                <div className="pressure-label-today inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText24}</span>
                                </div>
                            </div>
                            <div className="overlap-group6">
                                <div className="ontoday-container">
                                    <div className="x-condition-today inter-extra-bold-black-24px">
                                        <span className="inter-extra-bold-black-24px">{spanText25}</span>
                                    </div>
                                    <img className="x-icon-today" src={sunriseicontoday} alt="SunriseIconToday" />
                                </div>
                                <div className="place inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText26}</span>
                                </div>
                            </div>
                            <div className="overlap-group5">
                                <div className="ontoday-container">
                                    <div className="x-condition-today inter-extra-bold-black-24px">
                                        <span className="inter-extra-bold-black-24px">{spanText27}</span>
                                    </div>
                                    <img className="x-icon-today" src={sunseticontoday} alt="SunsetIconToday" />
                                </div>
                                <div className="place-1 inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText28}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-container">
                    <div className="frame-1">
                        <div className="overlap-group14 inter-extra-bold-black-14px">
                            <div className="overlap-group">
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
                                <img className="line" src={line7} alt="Line 7" />
                                <div className="wed inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText32}</span>
                                </div>
                                <img className="line" src={line8} alt="Line 8" />
                                <div className="thu inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText33}</span>
                                </div>
                                <img className="line-1" src={line9} alt="Line 9" />
                                <div className="fri inter-normal-black-14px">
                                    <span className="inter-normal-black-14px">{spanText34}</span>
                                </div>
                                <img className="line-1" src={line10} alt="Line 10" />
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
                    <div className="frame-2">
                        <div className="overlap-group15">
                            <div className="overlap-group-1">
                                <div className="month-container">
                                    <div className="title-month-forecast inter-bold-storm-dust-20px">
                                        <span className="inter-bold-storm-dust-20px">{spanText65}</span>
                                    </div>
                                    <div className="title-month inter-normal-black-18-2px">
                                        <span className="inter-normal-black-18-2px">{spanText66}</span>
                                    </div>
                                </div>
                                <div className="line-container">
                                    <img className="line-21" src={line21} alt="Line 21" />
                                    <img className="line-19" src={line19} alt="Line 19" />
                                    <img className="line-20" src={line20} alt="Line 20" />
                                    <img className="line-22" src={line22} alt="Line 22" />
                                    <img className="line-13" src={line13} alt="Line 13" />
                                    <img className="line-14" src={line14} alt="Line 14" />
                                    <img className="line-16" src={line16} alt="Line 16" />
                                    <img className="line-15" src={line15} alt="Line 15" />
                                    <img className="line-18" src={line18} alt="Line 18" />
                                    <img className="line-17" src={line17} alt="Line 17" />
                                </div>
                            </div>
                            <img className="x1day-condition" src={x1DayCondition} alt="1day-condition" />
                            <img className="x8day-condition" src={x8DayCondition} alt="8day-condition" />
                            <img className="x15day-condition" src={x15DayCondition} alt="15day-condition" />
                            <img className="x22day-condition" src={x22DayCondition} alt="22day-condition" />
                            <img className="x2day-condition" src={x2DayCondition} alt="2day-condition" />
                            <img className="x9day-condition" src={x9DayCondition} alt="9day-condition" />
                            <img className="x16day-condition" src={x16DayCondition} alt="16day-condition" />
                            <img className="x23day-condition" src={x23DayCondition} alt="23day-condition" />
                            <img className="x3day-condition" src={x3DayCondition} alt="3day-condition" />
                            <img className="x10day-condition" src={x10DayCondition} alt="10day-condition" />
                            <img className="x17day-condition" src={x17DayCondition} alt="17day-condition" />
                            <img className="x24day-condition" src={x24DayCondition} alt="24day-condition" />
                            <img className="x4day-condition" src={x4DayCondition} alt="4day-condition" />
                            <img className="x11day-condition" src={x11DayCondition} alt="11day-condition" />
                            <img className="x18day-condition" src={x18DayCondition} alt="18day-condition" />
                            <img className="x5day-condition" src={x5DayCondition} alt="5day-condition" />
                            <img className="x12day-condition" src={x12DayCondition} alt="12day-condition" />
                            <img className="x19day-condition" src={x19DayCondition} alt="19day-condition" />
                            <img className="x6day-condition" src={x6DayCondition} alt="6day-condition" />
                            <img className="x13day-condition" src={x13DayCondition} alt="13day-condition" />
                            <img className="x20day-condition" src={x20DayCondition1} alt="20day-condition" />
                            <img className="x7day-condition" src={x7DayCondition} alt="7day-condition" />
                            <img className="x14day-condition" src={x14DayCondition} alt="14day-condition" />
                            <img className="x20day-condition-1" src={x20DayCondition2} alt="20day-condition" />
                            <img className="x25day-condition" src={x25DayCondition} alt="25day-condition" />
                            <img className="x26day-condition" src={x26DayCondition} alt="26day-condition" />
                            <img className="x27day-condition" src={x27DayCondition} alt="27day-condition" />
                            <img className="x28day-condition" src={x28DayCondition} alt="28day-condition" />
                            <img className="x29day-condition" src={x29DayCondition} alt="29day-condition" />
                            <img className="x30day-condition" src={x30DayCondition} alt="30day-condition" />
                            <img className="x31day-condition" src={x31DayCondition} alt="31day-condition" />
                            <div className="x7day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText67}</span>
                                <span className="inter-medium-black-16-6px">{spanText68}</span>
                                <span className="inter-bold-black-16-6px">{spanText69}</span>
                            </div>
                            <div className="x14day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText70}</span>
                                <span className="inter-medium-black-16-6px">{spanText71}</span>
                                <span className="inter-bold-black-16-6px">{spanText72}</span>
                            </div>
                            <div className="x21day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText73}</span>
                                <span className="inter-medium-black-16-6px">{spanText74}</span>
                                <span className="inter-bold-black-16-6px">{spanText75}</span>
                            </div>
                            <div className="x6day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText76}</span>
                                <span className="inter-medium-black-16-6px">{spanText77}</span>
                                <span className="inter-bold-black-16-6px">{spanText78}</span>
                            </div>
                            <div className="x13day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText79}</span>
                                <span className="inter-medium-black-16-6px">{spanText80}</span>
                                <span className="inter-bold-black-16-6px">{spanText81}</span>
                            </div>
                            <div className="x20day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText82}</span>
                                <span className="inter-medium-black-16-6px">{spanText83}</span>
                                <span className="inter-bold-black-16-6px">{spanText84}</span>
                            </div>
                            <div className="x4day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText85}</span>
                                <span className="inter-medium-black-16-6px">{spanText86}</span>
                                <span className="inter-bold-black-16-6px">{spanText87}</span>
                            </div>
                            <div className="x11day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText88}</span>
                                <span className="inter-medium-black-16-6px">{spanText89}</span>
                                <span className="inter-bold-black-16-6px">{spanText90}</span>
                            </div>
                            <div className="x18day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText91}</span>
                                <span className="inter-medium-black-16-6px">{spanText92}</span>
                                <span className="inter-bold-black-16-6px">{spanText93}</span>
                            </div>
                            <div className="x3day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText94}</span>
                                <span className="inter-medium-black-16-6px">{spanText95}</span>
                                <span className="inter-bold-black-16-6px">{spanText96}</span>
                            </div>
                            <div className="x10day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText97}</span>
                                <span className="inter-medium-black-16-6px">{spanText98}</span>
                                <span className="inter-bold-black-16-6px">{spanText99}</span>
                            </div>
                            <div className="x17day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText100}</span>
                                <span className="inter-medium-black-16-6px">{spanText101}</span>
                                <span className="inter-bold-black-16-6px">{spanText102}</span>
                            </div>
                            <div className="x24day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText103}</span>
                                <span className="inter-medium-black-16-6px">{spanText104}</span>
                                <span className="inter-bold-black-16-6px">{spanText105}</span>
                            </div>
                            <div className="x2day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText106}</span>
                                <span className="inter-medium-black-16-6px">{spanText107}</span>
                                <span className="inter-bold-black-16-6px">{spanText108}</span>
                            </div>
                            <div className="x9day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText109}</span>
                                <span className="inter-medium-black-16-6px">{spanText110}</span>
                                <span className="inter-bold-black-16-6px">{spanText111}</span>
                            </div>
                            <div className="x16day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText112}</span>
                                <span className="inter-medium-black-16-6px">{spanText113}</span>
                                <span className="inter-bold-black-16-6px">{spanText114}</span>
                            </div>
                            <div className="x23day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText115}</span>
                                <span className="inter-medium-black-16-6px">{spanText116}</span>
                                <span className="inter-bold-black-16-6px">{spanText117}</span>
                            </div>
                            <div className="x1day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText118}</span>
                                <span className="inter-medium-black-16-6px">{spanText119}</span>
                                <span className="inter-bold-black-16-6px">{spanText120}</span>
                            </div>
                            <div className="x8day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText121}</span>
                                <span className="inter-medium-black-16-6px">{spanText122}</span>
                                <span className="inter-bold-black-16-6px">{spanText123}</span>
                            </div>
                            <div className="x15day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText124}</span>
                                <span className="inter-medium-black-16-6px">{spanText125}</span>
                                <span className="inter-bold-black-16-6px">{spanText126}</span>
                            </div>
                            <div className="x22day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText127}</span>
                                <span className="inter-medium-black-16-6px">{spanText128}</span>
                                <span className="inter-bold-black-16-6px">{spanText129}</span>
                            </div>
                            <div className="x5day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText130}</span>
                                <span className="inter-medium-black-16-6px">{spanText131}</span>
                                <span className="inter-bold-black-16-6px">{spanText132}</span>
                            </div>
                            <div className="x12day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText133}</span>
                                <span className="inter-medium-black-16-6px">{spanText134}</span>
                                <span className="inter-bold-black-16-6px">{spanText135}</span>
                            </div>
                            <div className="x19day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText136}</span>
                                <span className="inter-medium-black-16-6px">{spanText137}</span>
                                <span className="inter-bold-black-16-6px">{spanText138}</span>
                            </div>
                            <div className="x28day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText139}</span>
                                <span className="inter-medium-black-16-6px">{spanText140}</span>
                                <span className="inter-bold-black-16-6px">{spanText141}</span>
                            </div>
                            <div className="x27day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText142}</span>
                                <span className="inter-medium-black-16-6px">{spanText143}</span>
                                <span className="inter-bold-black-16-6px">{spanText144}</span>
                            </div>
                            <div className="x25day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText145}</span>
                                <span className="inter-medium-black-16-6px">{spanText146}</span>
                                <span className="inter-bold-black-16-6px">{spanText147}</span>
                            </div>
                            <div className="x26day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText148}</span>
                                <span className="inter-medium-black-16-6px">{spanText149}</span>
                                <span className="inter-bold-black-16-6px">{spanText150}</span>
                            </div>
                            <div className="x31day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText151}</span>
                                <span className="inter-medium-black-16-6px">{spanText152}</span>
                                <span className="inter-bold-black-16-6px">{spanText153}</span>
                            </div>
                            <div className="x30day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText154}</span>
                                <span className="inter-medium-black-16-6px">{spanText155}</span>
                                <span className="inter-bold-black-16-6px">{spanText156}</span>
                            </div>
                            <div className="x29day_temp inter-extra-bold-black-16-6px">
                                <span className="inter-extra-bold-black-16-6px">{spanText157}</span>
                                <span className="inter-medium-black-16-6px">{spanText158}</span>
                                <span className="inter-bold-black-16-6px">{spanText159}</span>
                            </div>
                            <div className="x1day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText160}</span>
                            </div>
                            <div className="x8day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText161}</span>
                            </div>
                            <div className="x15day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText162}</span>
                            </div>
                            <div className="x22day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText163}</span>
                            </div>
                            <div className="x2day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText164}</span>
                            </div>
                            <div className="x9day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText165}</span>
                            </div>
                            <div className="x16day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText166}</span>
                            </div>
                            <div className="x23day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText167}</span>
                            </div>
                            <div className="x3day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText168}</span>
                            </div>
                            <div className="x10day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText169}</span>
                            </div>
                            <div className="x17day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText170}</span>
                            </div>
                            <div className="x24day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText171}</span>
                            </div>
                            <div className="x4day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText172}</span>
                            </div>
                            <div className="x11day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText173}</span>
                            </div>
                            <div className="x18day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText174}</span>
                            </div>
                            <div className="x5day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText175}</span>
                            </div>
                            <div className="x12day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText176}</span>
                            </div>
                            <div className="x19day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText177}</span>
                            </div>
                            <div className="x6day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText178}</span>
                            </div>
                            <div className="x13day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText179}</span>
                            </div>
                            <div className="x20day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText180}</span>
                            </div>
                            <div className="x7day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText181}</span>
                            </div>
                            <div className="x14day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText182}</span>
                            </div>
                            <div className="x21day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText183}</span>
                            </div>
                            <div className="x25day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText184}</span>
                            </div>
                            <div className="x26day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText185}</span>
                            </div>
                            <div className="x27day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText186}</span>
                            </div>
                            <div className="x28day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText187}</span>
                            </div>
                            <div className="x29day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText188}</span>
                            </div>
                            <div className="x30day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText189}</span>
                            </div>
                            <div className="x31day inter-normal-black-18-2px">
                                <span className="inter-normal-black-18-2px">{spanText190}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default X2;