import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isSolid, setIsSolid] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsSolid(window.scrollY >= 50 || location.pathname === '/reservations');
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [location]);

    return (
        <div>
            <Menu className={`header ${isSolid ? 'solid' : 'transparent'}`} mode="horizontal" theme="light">
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item  key="food">
                    <Link  to="/food-menu">Food</Link>
                </Menu.Item>
                <Menu.Item key="drinks">
                    <Link to="/drinks-menu">Drinks</Link>
                </Menu.Item>
                <Menu.Item key="gift-card">
                    <Link to="/gift-card">Gift Cards</Link>
                </Menu.Item>
                <Menu.Item key="reservations">
                    <Link to="/reservations">Reservation</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Header;
