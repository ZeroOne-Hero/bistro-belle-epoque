import React from 'react';
import {Row, Col, Typography} from 'antd';
import './GiftCards.css';
import dinner2 from "../../assets/dinner2.png";
import dinner4 from "../../assets/dinner4.png";
import brunch4 from "../../assets/brunch4.png";
import dinner2b from "../../assets/dinner-2-b.png";
import dinner4b from "../../assets/dinner-4-b.png"
import brunch4b from "../../assets/brunch-4-b.png"
import {useLocation} from "react-router-dom";

const {Title, Paragraph} = Typography;

const GiftCards: React.FC = () => {
    const cards = [
        {front: dinner2, back: dinner2b},
        {front: dinner4, back: dinner4b},
        {front: brunch4, back: brunch4b},
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

