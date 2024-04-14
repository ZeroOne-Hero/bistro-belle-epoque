import React from 'react';
import Home from "../Home/Home";
import About from "../About/About";
import Reviews from "../../components/Reviews/Reviews";
import Info from "../Info/Info";
import "./Main.css"
const Main = () => {
    return (
        <div className="main">
            <Home/>
            <About/>
            <Info/>
            <Reviews/>
        </div>
    );
};

export default Main;
