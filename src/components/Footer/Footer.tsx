import React from 'react';
import { Row, Col, Button } from 'antd';
import { FacebookOutlined, XOutlined, InstagramOutlined } from '@ant-design/icons';
import Map from "../Map/Map";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-overlay"></div>
            <Row  className="footer-wrapper" justify="space-between" align="middle" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                    <div className="footer-sitemap">
                        <h3 className="footer-title">SITEMAP</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/food-menu">Food Menu</a></li>
                            <li><a href="/drinks-menu">Drinks Menu</a></li>
                            <li><a href="/gift-card">Gift Cards</a></li>
                            <li><a href="/reservations">Reservation</a></li>
                            {/*<li><a href="#about">About Us</a></li>*/}
                            {/*<li><a href="#info">Hours and Location</a></li>*/}
                            {/*<li><a href="#reviews">Reviews</a></li>*/}
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} style={{ textAlign: 'center' }}>
                    <h3 className="footer-title">SOCIAL</h3>
                    <div className="footer-social">
                        <FacebookOutlined style={{ fontSize: '27px', margin: '0 15px', color: 'white' }} />
                        <XOutlined style={{ fontSize: '27px', margin: '0 15px', color: 'white' }} />
                        <InstagramOutlined style={{ fontSize: '27px', margin: '0 15px', color: 'white' }} />
                    </div>
                    {/*<Button type="primary" href="/reservation" style={{ marginTop: '10px' }}>Make a Reservation</Button>*/}
                </Col>
                <Col >
                    <div >
                        <Map
                            lat={34.0522}
                            lng={-118.2437}
                            zoom={17}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
