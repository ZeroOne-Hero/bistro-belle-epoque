import React from 'react';
import {Row, Col, Typography} from 'antd';
import './GiftCards.css';
import * as images from "../../assets";
import {useLocation} from "react-router-dom";

const {Title, Paragraph} = Typography;

const GiftCards: React.FC = () => {
    const cards = [
        {front: images.dinner2, back: images.dinner2b},
        {front: images.dinner4, back: images.dinner4b},
        {front: images.brunch4, back: images.brunch4b},
    ];
    const location = useLocation();
    return (
        <div className="gift-cards-container">
            <div className="gift-card-bg" key={location.pathname}>
                <div className="overlay"></div>
                <Title level={2} className="gift-cards-title">Gift Cards</Title>
                <Paragraph className="gift-cards-intro">
                    Looking for the perfect gift? Our gift cards are available in various denominations and are perfect
                    for any occasion. Purchase them directly at our restaurant or order by phone for postal delivery.
                    Gift cards are valid for one year from the date of purchase.
                </Paragraph>
            </div>
            <div className="gift-card-cards">
                <Row gutter={[8, 8]} justify="center" className="gift-card-flip-wrapper" >
                    {cards.map((card, index) => (
                        <Col className="gift-card-col" key={index} xs={24} sm={12} md={8}>
                            <div className="gift-card-flip-container">
                                <div className="gift-card-inner">
                                    <div className="gift-card-front">
                                        <img src={card.front} alt={`Gift Card ${index + 1}`}
                                             className="gift-card-image"/>
                                    </div>
                                    <div className="gift-card-back">
                                        <img src={card.back} alt={`Gift Card ${index + 1} Back`}
                                             className="gift-card-image"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default GiftCards;

