export const initialState = {
    currentLocation: {
        ip: null,
        type: null,
        location: {
            latitude: null,
            longitude: null,
        },
        postcode: null,
        area: {
            code: null,
            geonameid: null,
            name: null,
        },
        asn: {
            number: null,
            organisation: null,
        },
        city: {
            geonameid: null,
            name: null,
            population: null,
        },
        continent: {
            geonameid: null,
            name: null,
            code: null,
        },
        country: {
            geonameid: null,
            name: null,
            code: null,
            capital: null,
            area_size: null,
            population: null,
            phone_code: null,
            is_in_eu: false,
            languages: {
                lt: null,
                ru: null,
                pl: null,
            },
            flag: {
                file: null,
                emoji: null,
                unicode: null,
            },
            tld: null,
        },
        currency: {
            code: null,
            name: null,
        },
        security: {
            is_tor: false,
            is_proxy: false,
            is_crawler: false,
            is_threat: false,
            is_thread: false,
        },
        time: {
            timezone: null,
            gtm_offset: null,
            gmt_offset: null,
            is_daylight_saving: false,
            code: null
        },
        status: null
    },
    isFetchingCurrentLocation: false,
    weatherInformation:
        {
            location:
                {
                    name: null,
                    region: null,
                    country: null,
                    lat: null,
                    lon: null,
                    tz_id: null,
                    localtime_epoch: null,
                    localtime: null,
                },
            current:
                {
                    last_updated_epoch: null,
                    last_updated: null,
                    temp_c: null,
                    temp_f: null,
                    is_day: null,
                    condition:
                        {
                            text: null,
                            icon: null,
                            code: null,
                        },
                    wind_mph: null,
                    wind_kph: null,
                    wind_degree: null,
                    wind_dir: null,
                    pressure_mb: null,
                    pressure_in: null,
                    precip_mm: null,
                    precip_in: null,
                    humidity: null,
                    cloud: null,
                    feelslike_c: null,
                    feelslike_f: null,
                    vis_km: null,
                    vis_miles: null,
                    uv: null,
                    gust_mph: null,
                    gust_kph: null
                }
        },
    isFetchingWeatherInformation: false,
    // Toggle component load when units are changed.
    isChangingUnits: false,
    // True for Celsius, false for Fahrenheit
    temperatureUnit: true,
    // True for kilometers per hour (kph), false for miles per hour (mph)
    windSpeedUnit: true,
    // True for kilometers (km), false for miles (miles)
    visibilityUnit: true,
    // True for millimeters (mm), false for inches (in)
    precipitationUnit: true,
    // True for millibars (mm), false for inches (in)
    pressureUnit: true,
    // Current Session User
    currentUser:
        {
            data:
                {
                    username: null,
                    mail: null,
                    password: null,
                    favoriteAddresses:
                        {
                            address: null,
                            criteriaWeathers:
                                {
                                    less_equals_more: null,
                                    criteriaName: null,
                                    criteriaValue: null,
                                    subscriptionAddress: null,
                                },
                            subscriptionAddresses: null,
                        },
                    subscriptionAddresses:
                        {
                            address: null,
                        },
                    userdId: null,
                },
            message: null,
            status: null,
        },
    isFetchingCurrentUser: false,
    session: false,
    sessionUsingIp: true,
    sessionDateToday: {
        year: null,
        month: null,
        day: null,
    },
    isUpdatingSessionDateToday: false,
    sessionIp: null,
    forecastHistory:
        {
            forecast:
                {
                    forecastday:
                        [{
                            astro:
                                {
                                    moon_illumination: null,
                                    moon_phase: null,
                                    moonrise: null,
                                    moonset: null,
                                    sunrise: null,
                                    sunset: null,
                                },
                            date: null,
                            date_epoch: null,
                            day:
                                {
                                    avghumidity: null,
                                    avgtemp_c: null,
                                    avgtemp_f: null,
                                    avgvis_km: null,
                                    avgvis_miles: null,
                                    condition:
                                        {
                                            text: null,
                                            icon: null,
                                            code: null,
                                        },
                                    maxtemp_c: null,
                                    maxtemp_f: null,
                                    maxwind_kph: null,
                                    maxwind_mph: null,
                                    mintemp_c: null,
                                    mintemp_f: null,
                                    totalprecip_in: null,
                                    totalprecip_mm: null,
                                    uv: null,
                                },
                            hour:
                                [{
                                    chance_of_rain: null,
                                    chance_of_snow: null,
                                    cloud: null,
                                    condition:
                                        {
                                            text: null,
                                            icon: null,
                                            code: null,
                                        },
                                    dewpoint_c: null,
                                    dewpoint_f: null,
                                    feelslike_c: null,
                                    feelslike_f: null,
                                    gust_kph: null,
                                    gust_mph: null,
                                    heatindex_c: null,
                                    heatindex_f: null,
                                    humidity: null,
                                    is_day: null,
                                    precip_in: null,
                                    precip_mm: null,
                                    pressure_in: null,
                                    pressure_mb: null,
                                    temp_c: null,
                                    temp_f: null,
                                    time: null,
                                    time_epoch: null,
                                    uv: null,
                                    vis_km: null,
                                    vis_miles: null,
                                    will_it_rain: null,
                                    will_it_snow: null,
                                    wind_degree: null,
                                    wind_dir: null,
                                    wind_kph: null,
                                    wind_mph: null,
                                    windchill_c: null,
                                    windchill_f: null,
                                }],
                        }],
                },
            location:
                {
                    country: null,
                    lat: null,
                    localtime: null,
                    localtime_epoch: null,
                    lon: null,
                    name: null,
                    region: null,
                    tz_id: null,
                },
        },
    isFetchingForecastHistory: false,
    mapCoordinates: {
        latitude: null,
        longitude: null,
    },
    previousMapCoordinates: {
        latitude: null,
        longitude: null,
    },
    mapCoordinatesFirstTime: false,
};