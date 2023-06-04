import "../css/App.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WeatherMain from "../components/WeatherMain";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|1_160)">
          <WeatherMain {...weatherMainData} />
        </Route>
      </Switch>
    </Router>
  );
}

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
};

