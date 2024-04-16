import React from 'react';
import "./Reservation.css";
import {Button, Col} from 'antd';
import video from "../../assets/996.mp4";
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
            <Button size="large" className="reservation-button">
                make a reservation
            </Button>

        </div>
    );
};

export default Reservations;
