import "../css/App.css";
import "../components/Navbar/Navbar.css";

import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WeatherMain from "../components/WeatherMain";
import {Circle, GoogleMap, LoadScript} from "@react-google-maps/api";
import NavbarComponent from "../components/Navbar";
import MapContainer from "../components/MapContainer";
import X2 from "../components/MonthlyWeekly";

function App() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDK7JtguLvN8BXLvIVX3tb1fwoAjenC9Nc" language="lt">
            <Router>
                <div className="navbar-main">
                    <NavbarComponent {...weatherMainData}/>
                    <img className="line" src="/img/line.svg" alt="Line"/>
                </div>
                <Switch>
                    <Route exact path="/" component={WeatherMain}/>
                    <Route path="/X2" render={() => <X2 {...x2Data} />} />
                </Switch>
            </Router>
        </LoadScript>

    );
}

// <Route path="/:path(|1_160)">
// <WeatherMain {...weatherMainData} />
export default App;

export const weatherMainData = {
    todaydate: "2023/05/26",
    profileCircle: "/img/profile-circle.png",
    citytoday: "Vilnius",
    currentregiontoday: "Vilnius region, Lithuania",
    conditionicontoday: "/img/conditionicontoday.png",
    feelslikeconditiontoday: "Feels like: 26⁰",
    textconditiontoday: "Mostly sunny",
    spanText1: "25",
    spanText2: "⁰",
    detailsLabel: "DETAILS",
    realfeellabeltoday: "Real Feel",
    realfeelconditiontoday: "25",
    windconditiontoday: "0.5 km/h",
    windlabeltoday: "Wind",
    uvindexlabeltoday: "UV Index",
    uvindexconditiontoday: "5",
    humiditylabeltoday: "Humidity",
    visibilitylabeltoday: "Visibility",
    precipitationlabeltoday: "Precipitation",
    humidityconditiontoday: "1%",
    visibilityconditiontoday: "12 km",
    precipitationconditiontoday: "3.0 mm",
    pressureconditiontoday: "1007 hPa",
    pressurelabeltoday: "Pressure",
    sunriseconditiontoday: "20:28",
    place1: "Sunrise",
    sunsetconditiontoday: "20:28",
    place2: "Sunset",
    overlapGroup: "/img/grid.png",
    todayslabelforgrid: "TODAY’S FORECAST",
    partlyCloudIcon1: "/img/partly-cloud-icon.png",
    partlyCloudIcon2: "/img/partly-cloud-icon.png",
    partlyCloudIcon3: "/img/partly-cloud-icon.png",
    partlyCloudIcon4: "/img/partly-cloud-icon.png",
    partlyCloudIcon5: "/img/partly-cloud-icon.png",
    partlyCloudIcon6: "/img/partly-cloud-icon.png",
    sunnyIcon1: "/img/sunny-icon.png",
    sunnyIcon2: "/img/sunny-icon.png",
    cloudyN1: "/img/cloudy-n-.png",
    cloudyN2: "/img/cloudy-n-.png",
    mostlySunnyN1: "/img/mostly-sunny-n-.png",
    mostlySunnyN2: "/img/mostly-sunny-n-.png",
    time1: "Now",
    time6: "19:00",
    time2: "15:00",
    time3: "16:00",
    time4: "17:00",
    time5: "18:00",
    time7: "20:00",
    time8: "21:00",
    time9: "22:00",
    time10: "23:00",
    time11: "24:00",
    time12: "01:00",
    spanText3: "25",
    spanText4: "⁰",
    spanText5: "25",
    spanText6: "⁰",
    spanText7: "25",
    spanText8: "⁰",
    spanText9: "27",
    spanText10: "⁰",
    spanText11: "25",
    spanText12: "⁰",
    spanText13: "24",
    spanText14: "⁰",
    spanText15: "20",
    spanText16: "⁰",
    spanText17: "20",
    spanText18: "⁰",
    spanText19: "18",
    spanText20: "⁰",
    spanText21: "17",
    spanText22: "⁰",
    spanText23: "15",
    spanText24: "⁰",
    spanText25: "10",
    spanText26: "⁰",
    textLabelMap: "Map of weather conditions",
    img1: "/img/1.jpg",
    img2: "/img/2.jpg",
    img3: "/img/3.jpg",
};
export const x2Data = {
    spanText1: "2023/05/26",
    spanText2: "TODAY",
    spanText3: "WEEK/MONTH",
    profileCircle: "/img/profile-circle.png",
    settings: "/img/settings.svg",
    line: "/img/line-1.png",
    spanText4: "Vilnius",
    spanText5: "Vilnius region, Lithuania",
    conditionicontoday: "/img/conditionicontoday.png",
    spanText6: "Feels like: 26⁰",
    spanText7: "Mostly sunny",
    spanText8: "25",
    spanText9: "⁰",
    line1: "/img/line-1.png",
    spanText10: "DETAILS",
    spanText11: "Real Feel",
    realfeelicontoday: "/img/realfeelicontoday.svg",
    spanText12: "25",
    windicontoday: "/img/windicontoday.svg",
    spanText13: "0.5 km/h",
    spanText14: "Wind",
    spanText15: "UV Index",
    spanText16: "5",
    iconBrightness: "/img/uvindexicontoday.svg",
    spanText17: "Humidity",
    humidityicontoday: "/img/humidityicontoday.svg",
    spanText18: "Visibility",
    visibilityicontoday: "/img/visibilityicontoday.svg",
    spanText19: "Precipitation",
    precipitationicontoday: "/img/precipitationicontoday.svg",
    spanText20: "1%",
    spanText21: "12 km",
    spanText22: "3.0 mm",
    pressureicontoday: "/img1/pressureicontoday.svg",
    spanText23: "1007 hPa",
    spanText24: "Pressure",
    spanText25: "20:28",
    sunriseicontoday: "/img1/sunseticontoday.svg",
    spanText26: "Sunrise",
    spanText27: "20:28",
    sunseticontoday: "/img1/sunseticontoday.svg",
    spanText28: "Sunset",
    spanText29: "7-DAY FORECAST",
    spanText30: "Today",
    line6: "/img1/line-6-1@2x.png",
    spanText31: "Tue",
    line7: "/img1/line-6-1@2x.png",
    spanText32: "Wed",
    line8: "/img1/line-6-1@2x.png",
    spanText33: "Thu",
    line9: "/img1/line-6-1@2x.png",
    spanText34: "Fri",
    line10: "/img1/line-6-1@2x.png",
    spanText35: "Sat",
    line11: "/img1/line-6-1@2x.png",
    spanText36: "Sun",
    spanText37: "24",
    spanText38: "/13",
    spanText39: "⁰",
    spanText40: "22",
    spanText41: "/10",
    spanText42: "⁰",
    spanText43: "25",
    spanText44: "/11",
    spanText45: "⁰",
    spanText46: "21",
    spanText47: "/10",
    spanText48: "⁰",
    spanText49: "19",
    spanText50: "/10",
    spanText51: "⁰",
    spanText52: "19",
    spanText53: "/10",
    spanText54: "⁰",
    spanText55: "18",
    spanText56: "/10",
    spanText57: "⁰",
    spanText58: "Sunny",
    spanText59: "Cloudy",
    spanText60: "Cloudy",
    spanText61: "Rainy",
    spanText62: "Rainy",
    spanText63: "Rainy",
    spanText64: "Cloudy",
    weekIcons: "/img1/week-icons-1@2x.png",
    spanText65: "MONTH FORECAST",
    spanText66: "MAY",
    line21: "/img1/line-21-1@2x.png",
    line19: "/img1/line-19-1@2x.png",
    line20: "/img1/line-22-1@2x.png",
    line22: "/img1/line-22-1@2x.png",
    line13: "/img1/line-16-1@2x.png",
    line14: "/img1/line-16-1@2x.png",
    line16: "/img1/line-16-1@2x.png",
    line15: "/img1/line-16-1@2x.png",
    line18: "/img1/line-16-1@2x.png",
    line17: "/img1/line-16-1@2x.png",
    x1DayCondition: "/img1/1day-condition-1@2x.png",
    x8DayCondition: "/img1/1day-condition-1@2x.png",
    x15DayCondition: "/img1/1day-condition-1@2x.png",
    x22DayCondition: "/img1/1day-condition-1@2x.png",
    x2DayCondition: "/img1/2day-condition-1@2x.png",
    x9DayCondition: "/img1/2day-condition-1@2x.png",
    x16DayCondition: "/img1/2day-condition-1@2x.png",
    x23DayCondition: "/img1/2day-condition-1@2x.png",
    x3DayCondition: "/img1/10day-condition-1@2x.png",
    x10DayCondition: "/img1/10day-condition-1@2x.png",
    x17DayCondition: "/img1/10day-condition-1@2x.png",
    x24DayCondition: "/img1/10day-condition-1@2x.png",
    x4DayCondition: "/img1/4day-condition-1@2x.png",
    x11DayCondition: "/img1/4day-condition-1@2x.png",
    x18DayCondition: "/img1/4day-condition-1@2x.png",
    x5DayCondition: "/img1/5day-condition-1@2x.png",
    x12DayCondition: "/img1/5day-condition-1@2x.png",
    x19DayCondition: "/img1/19day-condition-1@2x.png",
    x6DayCondition: "/img1/13day-condition-1@2x.png",
    x13DayCondition: "/img1/13day-condition-1@2x.png",
    x20DayCondition1: "/img1/20day-condition-1@2x.png",
    x7DayCondition: "/img1/7day-condition-1@2x.png",
    x14DayCondition: "/img1/7day-condition-1@2x.png",
    x20DayCondition2: "/img1/7day-condition-1@2x.png",
    x25DayCondition: "/img1/4day-condition-1@2x.png",
    x26DayCondition: "/img1/19day-condition-1@2x.png",
    x27DayCondition: "/img1/13day-condition-1@2x.png",
    x28DayCondition: "/img1/28day-condition-1@2x.png",
    x29DayCondition: "/img1/1day-condition-1@2x.png",
    x30DayCondition: "/img1/2day-condition-1@2x.png",
    x31DayCondition: "/img1/10day-condition-1@2x.png",
    spanText67: "24",
    spanText68: "/13",
    spanText69: "⁰",
    spanText70: "24",
    spanText71: "/13",
    spanText72: "⁰",
    spanText73: "24",
    spanText74: "/13",
    spanText75: "⁰",
    spanText76: "22",
    spanText77: "/10",
    spanText78: "⁰",
    spanText79: "22",
    spanText80: "/10",
    spanText81: "⁰",
    spanText82: "22",
    spanText83: "/10",
    spanText84: "⁰",
    spanText85: "24",
    spanText86: "/13",
    spanText87: "⁰",
    spanText88: "24",
    spanText89: "/13",
    spanText90: "⁰",
    spanText91: "24",
    spanText92: "/13",
    spanText93: "⁰",
    spanText94: "24",
    spanText95: "/13",
    spanText96: "⁰",
    spanText97: "24",
    spanText98: "/13",
    spanText99: "⁰",
    spanText100: "24",
    spanText101: "/13",
    spanText102: "⁰",
    spanText103: "24",
    spanText104: "/13",
    spanText105: "⁰",
    spanText106: "24",
    spanText107: "/13",
    spanText108: "⁰",
    spanText109: "24",
    spanText110: "/13",
    spanText111: "⁰",
    spanText112: "24",
    spanText113: "/13",
    spanText114: "⁰",
    spanText115: "24",
    spanText116: "/13",
    spanText117: "⁰",
    spanText118: "24",
    spanText119: "/13",
    spanText120: "⁰",
    spanText121: "24",
    spanText122: "/13",
    spanText123: "⁰",
    spanText124: "24",
    spanText125: "/13",
    spanText126: "⁰",
    spanText127: "24",
    spanText128: "/13",
    spanText129: "⁰",
    spanText130: "25",
    spanText131: "/11",
    spanText132: "⁰",
    spanText133: "25",
    spanText134: "/11",
    spanText135: "⁰",
    spanText136: "25",
    spanText137: "/11",
    spanText138: "⁰",
    spanText139: "24",
    spanText140: "/13",
    spanText141: "⁰",
    spanText142: "22",
    spanText143: "/10",
    spanText144: "⁰",
    spanText145: "24",
    spanText146: "/13",
    spanText147: "⁰",
    spanText148: "25",
    spanText149: "/11",
    spanText150: "⁰",
    spanText151: "24",
    spanText152: "/13",
    spanText153: "⁰",
    spanText154: "24",
    spanText155: "/13",
    spanText156: "⁰",
    spanText157: "24",
    spanText158: "/13",
    spanText159: "⁰",
    spanText160: "MAY 1",
    spanText161: "MAY 8",
    spanText162: "MAY 15",
    spanText163: "MAY 22",
    spanText164: "MAY 2",
    spanText165: "MAY 9",
    spanText166: "MAY 16",
    spanText167: "MAY 23",
    spanText168: "MAY 3",
    spanText169: "MAY 10",
    spanText170: "MAY 17",
    spanText171: "MAY 24",
    spanText172: "MAY 4",
    spanText173: "MAY 11",
    spanText174: "MAY 18",
    spanText175: "MAY 5",
    spanText176: "MAY 12",
    spanText177: "MAY 19",
    spanText178: "MAY 6",
    spanText179: "MAY 13",
    spanText180: "MAY 20",
    spanText181: "MAY 7",
    spanText182: "MAY 14",
    spanText183: "MAY 21",
    spanText184: "MAY 25",
    spanText185: "MAY 26",
    spanText186: "MAY 27",
    spanText187: "MAY 28",
    spanText188: "MAY 29",
    spanText189: "MAY 30",
    spanText190: "MAY 31",
};


