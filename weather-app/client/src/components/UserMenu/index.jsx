import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./UserMenu.css"
import {fetchUser} from "../../js/fetchUser";
import {fetchCurrentLocation} from "../../js/fetchCurrentLocation";

// <div className={`app-menu ${isUserMenuOpen ? "menu-open" : ""}`}>


const UserMenuComponent = ( { isUserMenuOpen } ) => {
    const dispatch = useDispatch();
    const [showOverlay, setShowOverlay] = useState(false);

    const currentSession = useSelector((state) => state.session);
    const currentUser = useSelector((state) => state.currentUser);
    const isFetchingCurrentUser = useSelector((state) => state.isFetchingCurrentUser);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("test effect");
        console.log("current user = ", currentUser);
        console.log("equals: ", currentUser.data.password === password);
        console.log("passwords: ", currentUser.data.password, password);
        if (currentUser !== null && currentUser.data.password === password) {
            console.log("Login:", username, password);
            setIsLoggedIn(true);
        }
    }, [currentUser]);

    const handleLogin = async (e) => {
        e.preventDefault();

        // Check if username or password is empty
        if (!username || !password) {
            console.log("Username and password are required.");
            return;
        }

        try
        {
            // Perform login logic with username and password
            await dispatch(fetchUser(username, password));

            // console.log("Current user: ", currentUser.username);
            //
            // if(password === currentUser.password)
            // {
            //     console.log("Login:", username, password);
            //     setIsLoggedIn(true);
            // }
        } catch (error)
        {
            console.error("Login failed:", error);
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Perform registration logic with username, password, and email
        console.log("Register:", username, password, email);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Perform logout logic
        setIsLoggedIn(false);
    };

    if (isFetchingCurrentUser) {
        return <div>LOADING...</div>;
    }

    return (
        <div className={`app-menu ${isUserMenuOpen ? "menu-open" : ""}`}>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome, {username}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br />
                        <button type="submit">Login</button>
                    </form>

                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <br />
                        <button type="submit">Register</button>
                    </form>
                </div>
            )}
        </div>
    );
};



export default UserMenuComponent;
