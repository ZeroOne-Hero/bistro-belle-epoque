import React from 'react';
import {  Row, Col } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import bg2 from "../../assets/interior.jpeg"
import './Home.css';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import bg3 from "../../assets/bg3.jpeg"
import {useLocation, Link} from "react-router-dom";
const Home: React.FC = () => {
    const location = useLocation();
    return (
        <div  key={location.pathname} className="home-main">
            <Swiper

                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="image-wrapper">
                        <div className="image-overlay"></div>
                        <div style={{ backgroundImage: `url(${bg3})`, backgroundPosition:'center', backgroundSize: 'cover',  height: '100vh', }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <div className="image-overlay"></div>
                        <div style={{ backgroundImage: `url(${bg2})`, backgroundPosition:'center', backgroundSize: 'cover', height: '100vh' }} />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="home-headers-wrapper">
                <h1 className="home-header">Bistro Belle Époque</h1>
                <h2 className="home-sub-header">European kitchen & bar</h2>
                <Row gutter={18} >
                    <Col>
                        <Link to="/reservations">
                            <button   className="book-table-button">
                                Book a Table
                            </button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/food-menu">
                            <button  className="make-order-button">
                                See Menu
                            </button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;
