import React from 'react';
import { Typography, Row, Col } from 'antd';
import "./Info.css";
import Map from "../Map/Map";
const { Title, Paragraph, Text } = Typography;



const Info = () => {
    return (
        <div className="info">
            <Row gutter={22} className="info-row">
                <Col >
                    <Title className="info-text info-title" level={3}>Hours & Location</Title>
                    <Paragraph className="info-text info-p">
                        <Text strong>DINNER</Text><br />
                        Seven nights a week, 5:00–10:00 p.m.<br /><br />
                        <Text strong>LUNCH</Text><br />
                        Sundays, 12:00–3:00 p.m.<br /><br />
                        <Text strong>APERITIVO</Text><br />
                        Sundays, 3:00–5:00<br /><br />
                        <Text strong>ADDRESS</Text><br />
                       address<br />
                        address<br />
                        desc<br /><br />
                    </Paragraph>
                    <Title level={4}>RESERVATIONS</Title>
                    <Paragraph className="info-text info-p">
                        Reservations open 30 days in advance.<br />
                        For groups of 5+ guests, please email <a href="mailto:info@restaurant.nyc">info@restaurant.nyc</a>
                    </Paragraph>
                </Col>
            </Row>
            <Map
                lat={34.0522}
                lng={-118.2437}
                zoom={17}

            />
        </div>
    );
};

export default Info;
