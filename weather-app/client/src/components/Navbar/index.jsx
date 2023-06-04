import React from "react";

function NavbarComponent(props) {
    const {
        todaydate,
        profileCircle,
    } = props;

    return (
        <div className="flex-row">
            <div className="today-date">{todaydate}</div>
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
            <img className="profile-circle" src={profileCircle} alt="profile-circle" />
            <img className="settings" src="/img/settings.svg" alt="settings" />
        </div>
    );
}

export default NavbarComponent;