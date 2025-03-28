import React, {useEffect, useState} from 'react';
import { Row, Col, Typography, Image } from 'antd';
import { useInView } from 'react-intersection-observer';
import "./About.css";
import about from "../../assets/about.jpg";
import aboutSmall from "../../assets/mobile/about-min.jpg";
const { Title, Paragraph } = Typography;

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01
    });
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="about" className="about">
            <Row className="about-row" gutter={[32, 32]} style={{ alignItems: 'center' }}>
                <Title className="about-title" level={2}>Our Story</Title>
                <Col xs={24} sm={24} md={12}  className="about-text">
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
                </Col>
                <Col>
                    <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
                        <Image
                            src={isSmallScreen ? aboutSmall : about}
                            alt="Bistro Interior"
                            style={{ width: "400px"}}
                            preview={false}
                            className="about-image"
                        />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default About;
