import React from 'react';
import { Typography, Card } from 'antd';
import "./Info.css"
const { Title, Paragraph, Text } = Typography;

const Info = () => {
    return (
        <div className="info">
         <Card style={{ margin: '30px', padding:'50px 0', textAlign: 'center' }}>
            <Title level={3}>HOURS & LOCATION</Title>
            <Paragraph>
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
            <Paragraph>
                Reservations open 30 days in advance and are available on Resy.<br />
                For groups of 5+ guests, please email <a href="mailto:info@restaurant.nyc">info@restaurant.nyc</a>
            </Paragraph>
         </Card>
        </div>
    );
};

export default Info;
