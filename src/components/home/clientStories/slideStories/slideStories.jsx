import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slideStories.scss';  // Import your custom styles
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { ClientStories } from '../../../../shared/utils/arrayData';
import { Images } from '../../../../shared/utils/images';
import { FaStar } from "react-icons/fa";
const SlideStories = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",  // Adjust to show part of the adjacent slides
    slidesToShow: 1,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  };

  return (
    <div className="slider-container2">
      <Slider {...settings}>
        {ClientStories.map(story => (
          <div key={story.id} className="slide">
            <div className="slide-content">
              <h4>{story.header}</h4>
              <p>
                {/* <img src={Images.quoteRight}/> */}
                <ImQuotesLeft className='quote' />
                {story.content}
                <ImQuotesRight className='quote' />
                {/* <img src={Images.quoteLeft}/> */}
              </p>
              <span><strong>{story.name}</strong></span>
              <div className='rateStar'>
                <FaStar  size='11' color='#FFE70F' />
                <FaStar  size='11' color='#FFE70F' />
                <FaStar  size='11' color='#FFE70F' />
                <FaStar  size='11' color='#FFE70F' />
                <FaStar  size='11' color='#DEDEDE' />
              </div>
            </div>
          </div>
        ))
        }
      </Slider >
    </div >
  );
}

export default SlideStories;
