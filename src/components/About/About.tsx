import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import { useInView } from 'react-intersection-observer';
import "./About.css";
import about from "../../assets/about.jpg";

const { Title, Paragraph } = Typography;

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01
    });

    return (
        <div className="about">
            <Row className="about-row" gutter={[32, 32]} style={{ alignItems: 'center' }}>
                <Col xs={24} sm={24} md={12} >
                    <Title className="about-title" level={2}>Our Story</Title>
                    <Paragraph className="about-p">
                        Welcome to Our Bistro! Founded in the heart of the city, Our Bistro has been serving up
                        delicious meals and memorable experiences since 1998. Our commitment to quality ingredients,
                        exceptional service, and incomparable customer care keep our community coming back again and
                        again.
                    </Paragraph>
                    <Paragraph className="about-p">
                        Our recipes are time-tested and inspired by traditional culinary arts. We believe in
                        the power of great food to bring people together. Whether it's a quick lunch or a special
                        dinner, we strive to create a delightful dining experience in a warm and welcoming atmosphere.
                    </Paragraph>
                    <Paragraph className="about-p">
                        Our recipes are time-tested and inspired by traditional culinary arts. We believe in
                        the power of great food to bring people together. Whether it's a quick lunch or a special
                        dinner, we strive to create a delightful dining experience in a warm and welcoming atmosphere.
                    </Paragraph>
                </Col>
                <Col>
                    <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
                        <Image
                            src={about}
                            alt="Bistro Interior"
                            style={{ width: "auto", height: '550px' }}
                            preview={false}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;
