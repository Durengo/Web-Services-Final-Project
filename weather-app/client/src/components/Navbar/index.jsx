import React, {useState} from "react";
import UserMenu from "../UserMenu";
import {GiHamburgerMenu} from "react-icons/gi";
import {ReactDimmer} from "react-dimmer";
import UnitMenu from "../UnitMenu";
import {useSelector} from "react-redux";

function NavbarComponent(props) {
    const [isUserMenuVisible, setUserMenuVisibility] = useState(false);
    const [isUnitMenuVisible, setUnitMenuVisibility] = useState(false);
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

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
            <div className="today">
                <div className="overlap-group14">
                    <div className="today-1">TODAY</div>
                </div>
            </div>
            <div className="week-month">
                <div className="overlap-group13">
                    <div className="week-mo">WEEK/MONTH</div>
                </div>
            </div>
            <img className="profile-circle menu-btn" src={profileCircle} alt="profile-circle" onClick={handleProfileClick}/>
            <img className="settings menu-btn" src="/img/settings.svg" alt="settings" onClick={handleSettingsClick}/>

            <UserMenu isUserMenuOpen={isUserMenuVisible} />
            <ReactDimmer
                isOpen={isUserMenuVisible}
                exitDimmer={setUserMenuVisibility}
                zIndex={100}
                blur={1.5}
            />

            <UnitMenu isUnitsMenuOpen={isUnitMenuVisible} />
            <ReactDimmer
                isOpen={isUnitMenuVisible}
                exitDimmer={setUnitMenuVisibility}
                zIndex={100}
                blur={0.5}
            />
        </div>
    );
}
// {showOverlay && (
//     <div className="overlay">
//         <div className="overlay-content">
//             <h2>Profile Overlay</h2>
//             {/* Overlay content goes here */}
//         </div>
//     </div>
// )}
export default NavbarComponent;