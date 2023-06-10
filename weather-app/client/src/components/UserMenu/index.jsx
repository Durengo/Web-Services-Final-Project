import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import "./UserMenu.css"

const UserMenuComponent = ( { isUserMenuOpen } ) => {
    const [showOverlay, setShowOverlay] = useState(false);


    return (
        <div className={`app-menu ${isUserMenuOpen ? "menu-open" : ""}`}>
            <button>Login</button>
            <button>Register</button>
        </div>
    );
};

export default UserMenuComponent;
