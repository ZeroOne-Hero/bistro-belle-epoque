import React from 'react';
import { Button, Row, Col } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import bg from "../../assets/home.jpg"
import bg2 from "../../assets/bg2.jpg"
import './Home.css';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import {Route} from "react-router-dom";
import Contact from "../Contact/Contact";

const Home: React.FC = () => {
    return (
        <div className="home-main">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: SwiperClass) => console.log(swiper)}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                effect="fade"
            >
                <SwiperSlide>
                    <div className="image-wrapper">
                        <div className="image-overlay"></div>
                        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh', }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <div className="image-overlay"></div>
                        <div style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', height: '100vh' }} />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="home-headers-wrapper">
                <h1 className="home-header">Bistro Belle Époque</h1>
                <h2 className="home-sub-header">Open daily</h2>
                <Row gutter={16} justify="center">
                    <Col>
                        <Button type="primary" size="large" className="book-table-button">
                            Book a Table
                        </Button>
                    </Col>
                    <Col>
                        <Button size="large" className="make-order-button">
                           See Menu
                        </Button>
                    </Col>
                </Row>
            </div>
     {/*<Contact />*/}
        </div>
    );
};

export default Home;
