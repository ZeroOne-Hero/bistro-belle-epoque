import React from 'react';
import { Typography, Row, Col } from 'antd';
import "./Info.css";
const { Title, Paragraph, Text } = Typography;



const Info = () => {
    return (
        <section id="info" className="info">
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
                       242 William St.<br />
                        Northbridge WA<br />
                        6003, Australia<br /><br />
                    </Paragraph>
                    <Title level={4}>RESERVATIONS</Title>
                    <Paragraph className="info-text info-p">
                        Reservations open 30 days in advance.<br />
                        For groups of 5+ guests, please email info@belleepoque.au
                    </Paragraph>
                </Col>
            </Row>
        </section>
    );
};

export default Info;
