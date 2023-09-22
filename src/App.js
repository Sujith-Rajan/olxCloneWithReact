import "./App.css";
import Home from "./pages/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import ClickView from "./component/ClickView";
import Create from "./component/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route  path="/login" element={<Login />} />
                    <Route path="/product" element={<ClickView />} />
                    <Route path="/createItem" element={<Create />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
