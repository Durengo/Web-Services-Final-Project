import React, {useState} from "react";
import UserMenu from "../UserMenu";
import {ReactDimmer} from "react-dimmer";
import UnitMenu from "../UnitMenu";
import {Link} from "react-router-dom";

function NavbarComponent(props) {
    const [isUserMenuVisible, setUserMenuVisibility] = useState(false);
    const [isUnitMenuVisible, setUnitMenuVisibility] = useState(false);
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const [activePage, setActivePage] = useState("today");

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const {
        profileCircle
    } = props;

    const handleProfileClick = () => {
        setUserMenuVisibility((prevState) => !prevState)
    }

    const handleSettingsClick = () => {
        setUnitMenuVisibility((prevState) => !prevState)
    }

    return (
        <div className="flex-row">
            <div className="today-date">{formattedDate}</div>
            <Link to="/" className={`nav-btn ${activePage === "today" ? "active" : ""}`}
                  onClick={() => handlePageChange("today")}>
                <div className="today">
                    <div className="overlap-group14">
                        <div className="today-1">TODAY</div>
                    </div>
                </div>
            </Link>
            <Link to="/X2" className={`nav-btn ${activePage === "X2" ? "active" : ""}`}
                  onClick={() => handlePageChange("X2")}>
                <div className="week-month">
                    <div className="overlap-group13">
                        <div className="week-mo">WEEK/MONTH</div>
                    </div>
                </div>
            </Link>
            <img className="profile-circle menu-btn" src={profileCircle} alt="profile-circle"
                 onClick={handleProfileClick}/>
            <img className="settings menu-btn" src="/img/settings.svg" alt="settings" onClick={handleSettingsClick}/>

            <UserMenu isUserMenuOpen={isUserMenuVisible}/>
            <ReactDimmer
                isOpen={isUserMenuVisible}
                exitDimmer={setUserMenuVisibility}
                zIndex={100}
                blur={1.5}
            />

            <UnitMenu isUnitsMenuOpen={isUnitMenuVisible}/>
            <ReactDimmer
                isOpen={isUnitMenuVisible}
                exitDimmer={setUnitMenuVisibility}
                zIndex={100}
                blur={0.5}
            />
        </div>
    );
}

export default NavbarComponent;