import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isSolid, setIsSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSolid(window.scrollY >= 50);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);



    return (
        <div >
            <Menu className={`header ${isSolid ? 'solid' : 'transparent'}`} mode="horizontal" theme="light">
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item className="header-item" key="food">
                    <Link className="header-link" to="/food-menu">Food</Link>
                </Menu.Item>
                <Menu.Item key="drinks">
                    <Link to="/drinks-menu">Drinks</Link>
                </Menu.Item>
                <Menu.Item key="gift-card">
                    <Link to="/gift-card">Gift Card</Link>
                </Menu.Item>
                <Menu.Item key="contact-us">
                    <Link to="/contact">Contact Us</Link>
                </Menu.Item>
                <Menu.Item key="reservations">
                    <Link to="/reservations">Reservations</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Header;
