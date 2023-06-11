export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_IS_FETCHING_CURRENT_USER = "SET_IS_FETCHING_CURRENT_USER";

export const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser,
    };
};

export const setIsFetchingCurrentUser = (isFetchingCurrentUser) => {
    return {
        type: SET_IS_FETCHING_CURRENT_USER,
        payload: isFetchingCurrentUser,
    };
};