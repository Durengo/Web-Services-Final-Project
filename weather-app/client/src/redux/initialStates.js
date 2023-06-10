export const initialState = {
    data: null,
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
    temperatureUnit: true,
};