import React from "react";
import "./Login.css";
import { useState,useContext } from "react";
import { FirebaseContext } from "../store/FirebaseContext";
import { useNavigate } from "react-router-dom";
function Login() {
    let navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const {firebaseApp} = useContext(FirebaseContext)
    const onhandleLogin=(e)=>{
        e.preventDefault()
        firebaseApp.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navigate('/')
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div className="login">
            <form onSubmit={onhandleLogin}>
            <div className="user-details">
                <h4>Login here</h4>

                <input type="text" placeholder="Email Address" value={email} onChange={(e)=>setemail(e.target.value)}/>

                <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
            </div>
            <div className="submit-btn">
                <button type="submit">Login</button>
            </div>
            </form>
        </div>
    );
}

export default Login;
