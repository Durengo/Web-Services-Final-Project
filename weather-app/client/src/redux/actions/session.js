export const SET_SESSION_LOGGED_IN = "SET_SESSION_LOGGED_IN";
export const SET_SESSION_USING_IP = "SET_SESSION_USING_IP";
export const SET_SESSION_DATE_TODAY = "SET_SESSION_DATE_TODAY";
export const SET_IS_UPDATING_SESSION_DATE_TODAY = "SET_IS_UPDATING_SESSION_DATE_TODAY";
export const SET_SESSION_IP = "SET_SESSION_IP";
export const setSessionLoggedIn = (session) => {
    return {
        type: SET_SESSION_LOGGED_IN,
        payload: session,
    };
};
export const setSessionIp = (sessionIp) => {
    return {
        type: SET_SESSION_IP,
        payload: sessionIp,
    };
};
export const setSessionDateToday = (year, month, day) => {
    return {
        type: SET_SESSION_DATE_TODAY,
        payload: {
            year: year,
            month: month,
            day: day,
        },
    };
};
export const setIsSessionUpdatingDateToday = (isUpdatingSessionDateToday) => {
    return {
        type: SET_IS_UPDATING_SESSION_DATE_TODAY,
        payload: isUpdatingSessionDateToday,
    };
};
export const setSessionUsingIp = (sessionUsingIp) => {
    return {
        type: SET_SESSION_USING_IP,
        payload: sessionUsingIp,
    };
};