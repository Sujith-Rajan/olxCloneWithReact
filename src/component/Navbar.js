import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext, FirebaseContext } from "../store/Context";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const {firebaseApp} =useContext(FirebaseContext)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const onHandleLogout=()=>{
      firebaseApp.auth().signOut().then(()=>{
        alert ('signout Successfully')
      })
    }
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
                {user && user.displayName ?<h5>Welcome {user.displayName}</h5>: <button onClick={()=>navigate('/login')}>Login</button>}
            </div>
            <div>
            {user && <button onClick={onHandleLogout}>LogOut</button>}
            </div>
            <div className="sell-btn">
                <button>Sel</button>
            </div>
        </div>
    );
}

export default Navbar;
