import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideProjects.scss"; // Import your custom CSS
import { OurPoducts } from '../../../../shared/utils/arrayData';
import { Paths } from '../../../../browserRouter/paths/paths';
import { useNavigate } from "react-router-dom";
const SlideProjects = () => {
      const navigate = useNavigate();
    
     const navigateAppointment =()=>{
        navigate(Paths.BookanAppointment)
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    // autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    // autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {OurPoducts.map(product => (
                    <div key={product.id} >
                        <div className="product-item" >

                            <div><img src={product.productImg} alt={product.header} className="product-image" /></div>
                            <div className="product-info">
                                <h2 className="product-header">{product.header}</h2>
                                <p className="product-description">{product.info}</p>
                                <button onClick={navigateAppointment} className="product-button">Book a Demo</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlideProjects;
