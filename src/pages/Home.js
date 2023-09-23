import React from "react";
import Navbar from "../component/Navbar";
import Catogory from "../component/Catogory";
import Banner from "../component/Banner";
import Post from "../component/Post";
import Footer from "../component/Footer";

function Home(props) {
    return (
        <div>
            <Navbar />
            <Catogory />
            <Banner />
            <Post />
            <Footer />
        </div>
    );
}

export default Home;
