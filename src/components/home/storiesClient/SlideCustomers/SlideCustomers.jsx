import React from 'react';
import Styles from './SlideCustomers.module.css';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa";
const CustomerStories = [
  {
    heading: "Streamlined Operations",
    info: "We have been using the GroupRM system since early 2014. Introduction of the system helped Flydubai to move out the email-based handling of group requests to an efficient solution. Most importantly, being one of the fastest-growing airlines in the world.",
    customer: "Fly Dubai",
    rating: "4",
  },
  {
    heading: "Seamless Integration",
    info: "The system was a game changer for our business. It streamlined processes and increased efficiency.",
    customer: "Emirates",
    rating: "5",
  },
  {
    heading: "Efficient Workflow",
    info: "Handling requests became more systematic and effortless, improving our overall productivity.",
    customer: "Qatar Airways",
    rating: "4",
  },
  {
    heading: "Enhanced Performance",
    info: "We experienced a drastic improvement in performance and reduction in errors.",
    customer: "Turkish Airlines",
    rating: "4",
  },
  {
    heading: "Reliable System",
    info: "The introduction of this system ensured reliability and better service management.",
    customer: "Etihad Airways",
    rating: "3",
  },
  {
    heading: "User-Friendly",
    info: "The system is very easy to use, and the learning curve was minimal for our team.",
    customer: "Singapore Airlines",
    rating: "5",
  },
  {
    heading: "Cost-Effective Solution",
    info: "We saved significant time and money after implementing this system.",
    customer: "Lufthansa",
    rating: "4",
  },
  {
    heading: "Increased Productivity",
    info: "Productivity increased across departments, making operations smoother.",
    customer: "British Airways",
    rating: "3",
  },
  {
    heading: "Great Customer Support",
    info: "The support team is always available and helps resolve issues quickly.",
    customer: "Air France",
    rating: "5",
  },
  {
    heading: "Highly Recommend",
    info: "A must-have system for any airline looking for efficient management solutions.",
    customer: "KLM",
    rating: "5",
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div className={Styles.customArrow + " " + Styles.prevArrow} onClick={onClick}>
    <FaChevronLeft color='rgba(100, 116, 139, 1)' />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div className={Styles.customArrow + " " + Styles.nextArrow} onClick={onClick}>
    <FaChevronRight color='rgba(100, 116, 139, 1)' />
  </div>
);

const SlideCustomers = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    prevArrow: <PrevArrow  />,
    nextArrow: <NextArrow  />,
    centerMode: false, // Ensure better spacing
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200, // Laptops
        settings: { slidesToShow: 3, centerMode: false }
      },
      {
        breakpoint: 992, // Tablets
        settings: { slidesToShow: 2, centerMode: false }
      },
      {
        breakpoint: 768, // Small tablets
        settings: { slidesToShow: 1, centerMode: false }
      },
      {
        breakpoint: 480, // Small mobile screens
        settings: { slidesToShow: 1, centerMode: false }
      }
    ]
  };



  const StarRating = ({ rating }) => {
    return (
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} style={{ color: i < rating ? "#1b1464" : "lightgray",  }} className={Styles.ratingStars}>
            {/* ★ */}
            <FaStar />
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={Styles.containerCustomerStories}>
      <div className={Styles.sliderContainer}>
        <Slider {...settings}>
          {CustomerStories.map((story, index) => (
            <div key={index} className={Styles.blockStory}>
              <h3>{story.heading}</h3>
              <p>
                <ImQuotesLeft color='rgba(10, 49, 97, 1)' size={15} className={Styles.iconQuoteRight} />
                {story.info}
                <ImQuotesRight color='rgba(10, 49, 97, 1)' size={15} className={Styles.iconQuoteLeft} />
              </p>
              <div>
                <p className={Styles.customerText}> {story.customer}</p>
                <p > <StarRating rating={story.rating} /></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideCustomers;
