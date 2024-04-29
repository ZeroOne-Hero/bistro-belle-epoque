import React from 'react';
import "./Main.css"
import {Home, About, Reviews, Info} from '../../components';

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
