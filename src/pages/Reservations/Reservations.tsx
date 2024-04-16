import React from 'react';
import "./Reservation.css";
import { Col } from 'antd';
import video from "../../assets/96.mp4";
import {useLocation} from "react-router-dom";

const Reservations = () => {
    const location = useLocation();
    return (
        <div className="reservation" key={location.pathname}>
            <Col className="video">
                <video
                    className="info-video"
                    autoPlay
                    muted
                    loop
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Col>
        </div>
    );
};

export default Reservations;
