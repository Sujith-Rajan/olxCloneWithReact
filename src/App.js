import "./App.css";
import Home from "./pages/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import ClickView from "./component/ClickView";
import Create from "./component/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect,useContext } from "react";
import { AuthContext } from "./store/Context";
import { FirebaseContext } from "./store/Context";

import View from "./store/PostContext";

function App() {
    const {setuser} = useContext(AuthContext)
    const {firebaseApp} =useContext(FirebaseContext)
    useEffect(()=>{
        // console.log(user) 
        firebaseApp.auth().onAuthStateChanged((user)=>{
            setuser(user) 
        })
        })
    return (
        <div className="App">
            <View>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route  path="/login" element={<Login />} />
                    <Route path="/product" element={<ClickView />} />
                    <Route path="/createItem" element={<Create />} />
                  
                </Routes>
            </Router>
            </View>
        </div>
    );
}

export default App;
