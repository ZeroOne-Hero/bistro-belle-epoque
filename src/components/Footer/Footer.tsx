import React from 'react';
import { Row, Col, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import Map from "../Map/Map";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <Row  className="footer-wrapper" justify="space-between" align="middle" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                    <div className="footer-sitemap">
                        <h3>SITEMAP</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">Food Menu</a></li>
                            <li><a href="/services">Drinks Menu</a></li>
                            <li><a href="/contact">Gift Cards</a></li>
                            <li><a href="/">Reservation</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Hours and Location</a></li>
                            <li><a href="/contact">Reviews</a></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={8} style={{ textAlign: 'center' }}>
                    <div className="footer-social">
                        <FacebookOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
                        <TwitterOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
                        <InstagramOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
                    </div>
                    <Button type="primary" href="/reservation" style={{ marginTop: '10px' }}>Make a Reservation</Button>
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
