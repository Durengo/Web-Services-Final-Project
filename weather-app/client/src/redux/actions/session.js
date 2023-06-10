export const SET_SESSION_LOGGED_IN = "SET_SESSION_LOGGED_IN";

export const setSessionLoggedIn = (session) => {
    return {
        type: SET_SESSION_LOGGED_IN,
        payload: session,
    };
};