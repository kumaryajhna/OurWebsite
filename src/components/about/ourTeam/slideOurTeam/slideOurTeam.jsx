import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slideOurTeam.scss';  // Import your custom styles
import { OurTeamList } from '../../../../shared/utils/arrayData';

const SlideOurTeam = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
    };

    return (
        <div className="slider-container3">
            <Slider {...settings}>
                {OurTeamList.map((member, index) => (
                    <div key={index} className="slide-item">
                        <img src={member.image} alt={member.name} />
                        <div className="overlay">
                            <h6>{member.name}</h6>
                            <p>{member.role}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideOurTeam;
