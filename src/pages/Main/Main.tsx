import React from 'react';
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import Info from "../../components/Info/Info";
import "./Main.css"
const Main = () => {
    return (
        <div className="main">
            <Home/>
            <About/>
            <Reviews/>
            <Info/>
        </div>
    );
};

export default Main;
