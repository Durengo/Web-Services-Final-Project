import axios from "axios";
import {LOCAL_API_URL} from "../env/env";
import {setCurrentUser, setIsFetchingCurrentUser} from "../redux/actions/sessionUser";
import {setSessionLoggedIn} from "../redux/actions/session";
import {useSelector} from "react-redux";

export const fetchUser = (username, password) => {
    console.log("TESTTSTST");
    return async (dispatch) => {
        dispatch(setIsFetchingCurrentUser(true));
        if(!username || !password)
        {
            dispatch(setIsFetchingCurrentUser(false));
            dispatch(setSessionLoggedIn(false));
            console.log("Canceling dispatch username or password is null.");
            return;
        }
        try {
            console.log("TESTING FETCH USER");

            const response = await axios.get(`${LOCAL_API_URL}/users/username?username=` + username); // Perform the asynchronous operation to fetch the location
            const user = response.data; // Extract the location data from the response
            console.log("Retrieved Data! User information: ", user);
            const currentUser = useSelector((state) => state.currentUser);
            if(user && currentUser.username === username && currentUser.password === password)
            {
                dispatch(setSessionLoggedIn(true));
            }
            else
            {
                dispatch(setCurrentUser(null));
                dispatch(setSessionLoggedIn(false));
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            dispatch(setSessionLoggedIn(false));
            dispatch(setCurrentUser(null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsFetchingCurrentUser(false));
        }
    };
};