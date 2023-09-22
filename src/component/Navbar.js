import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../store/Context";

function Navbar() {
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="logo">olx</div>
            <div className="location-search">
                <input type="text" placeholder="india" />
            </div>
            <div className="item-search">
                <input type="text" placeholder="Find Cars,Mobile Phones and More" />
            </div>
            <div className="langauge-set">
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
            <div className="login-btn">
                {user && user.displayName ? <h5>{user.displayName}</h5> : <button>Login</button>}
            </div>
            <div className="sell-btn">
                <button>Sel</button>
            </div>
        </div>
    );
}

export default Navbar;
