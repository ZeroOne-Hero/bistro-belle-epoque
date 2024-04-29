import React, { useState } from 'react';
import "./Reservation.css";
import { Button } from 'antd';
import video from "../../assets/996.mp4";
import { useLocation } from "react-router-dom";

const Reservations = () => {
    const [formVisible, setFormVisible] = useState(false);
    const location = useLocation();

    const handleReservationClick = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className="reservation" key={location.pathname}>
            <div className="video">
                <video className="info-video" autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Button size="large" className="reservation-button" onClick={handleReservationClick}>
                Make a Reservation
            </Button>
            <div className={`reservation-form ${formVisible ? 'open' : ''}`}>
                <div className="form-message">
                    <p>Sorry, we are currently fully booked. Please try again later.</p>
                </div>
                <div className="form-item">
                    <input type="text" className="reservation-input" placeholder="Enter your name" disabled />
                </div>
                <div className="form-item">
                    <input type="text" className="reservation-input" placeholder="Enter your last name" disabled />
                </div>
                <div className="form-item">
                    <input type="email" className="reservation-input" placeholder="Enter your email" disabled />
                </div>
                <div className="form-item">
                    <input type="date" className="reservation-date-picker" disabled />
                </div>
                <div className="form-item">
                    <input type="time" className="reservation-time-picker" min="11:00" max="22:00" step="1800" disabled />
                </div>
                <div className="reservation-buttons">
                    <button type="button" className="reservation-submit" disabled title="Currently unavailable">
                        Submit
                    </button>
                    <button type="button" className="reservation-cancel" onClick={() => setFormVisible(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reservations;



