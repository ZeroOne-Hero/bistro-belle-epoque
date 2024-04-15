import React from 'react';
import { Typography } from 'antd';
import "./Info.css"
const { Title, Paragraph, Text } = Typography;

const Info = () => {
    return (
        <div className="info">
            <Title className="info-text info-title" level={3}>HOURS & LOCATION</Title>
            <Paragraph className="info-text info-p">
                <Text strong>DINNER</Text><br />
                Seven nights a week, 5:00–10:00 p.m.<br /><br />
                <Text strong>LUNCH</Text><br />
                Sundays, 12:00–3:00 p.m.<br /><br />
                <Text strong>APERITIVO</Text><br />
                Sundays, 3:00–5:00<br /><br />
                <Text strong>address</Text><br />
                address<br /><br />
            </Paragraph>
            <Title level={4}>RESERVATIONS</Title>
            <Paragraph className="info-text info-p">
                Reservations open 30 days in advance.<br />
                For groups of 5+ guests, please email <a href="mailto:info@restaurant.nyc">info@restaurant.nyc</a>
            </Paragraph>
        </div>
    );
};

export default Info;
