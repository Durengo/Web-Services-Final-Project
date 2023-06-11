import {setIsSessionUpdatingDateToday, setSessionDateToday} from "../redux/actions/session";

export const setDateToday = () => {
    return async (dispatch) => {
        dispatch(setIsSessionUpdatingDateToday(true)); // Set the fetching flag to true to indicate the state is being fetched
        try {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");

            console.log(`Session Date Today has been set to: ${year}-${month}-${day}`);
            dispatch(setSessionDateToday(year, month, day)); // Dispatch an action to set the fetched location state in Redux
        } catch (error) {
            console.error("Error setting session today date:", error);
            dispatch(setSessionDateToday(null, null, null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsSessionUpdatingDateToday(false));
        }
    };
};