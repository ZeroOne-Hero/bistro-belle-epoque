import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import "./Reviews.css";

const Reviews = () => {

    const reviews = [
        {
            name: "John D.",
            review: "Absolutely wonderful experience, the food was fantastic and the atmosphere was even better!",
            from: "from Google"
        },
        {
            name: "Jane S.",
            review: "A beautiful place with top-notch service. Highly recommend the seafood platter.",
            from: "from Google"
        },
        {
            name: "Carlos R.",
            review: "Great value for money, and the staff were incredibly friendly. Will be back for sure!",
            from: "from Google"
        }
    ];

    return (
        <div className="review-container">
            <h1 className="reviews-title">They love us</h1>

            <Swiper className="swiper-reviews"
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{clickable: true}}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide className="swiper-reviews-each" key={index}>
                        <div className="reviews-overlay"></div>
                        <div className="reviews-p" style={{textAlign: 'center'}}>
                            <p style={{fontStyle: 'italic'}}>"{review.review}"</p>
                            <p style={{fontWeight: 'bold'}}>{review.name}</p>
                            <p>{review.from}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
