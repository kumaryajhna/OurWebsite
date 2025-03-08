import React, { useEffect, useRef } from 'react';
import BusinessSimple from './businessSimple/businessSimple';
import OurProjects from './ourProjects/ourProjects';
import OurBlogs from './ourBlogs/ourBlogs';
import Footer from '../../layout/footer/footer';
import HomeAbout from './homeAbout/homeAbout';
import HomeServices from './homeServices/homeServices';
import { useLocation } from 'react-router-dom';
import ClientsIn from './clientsIn/clientsIn';
import UseScrollToTop from '../../shared/hooks/useScrollToTop';

const Home = () => {
  UseScrollToTop()
  const homeRef = useRef(null);
  const homeAboutRef = useRef(null);
  const homeServicesRef = useRef(null);
  const ourProjectsRef = useRef(null);
  const ourBlogsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const offset = 60; // Offset of 80 pixels
        const topOffset = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div>
        <div ref={homeRef} id="home" className='containerMain'>
          <BusinessSimple />
        </div>
        <div ref={homeAboutRef} id="about" className='containerMain'>
          <HomeAbout />
        </div>
        <div ref={homeServicesRef} id="services" className='containerMain'>
          <HomeServices />
        </div>
        <div ref={ourProjectsRef} id="projects" className='containerMain'>
          <OurProjects />
        </div>
        <div ref={ourBlogsRef} id="blogs" className='containerMain'>
          <OurBlogs comp="home" />
        </div>
        <div ref={ourBlogsRef} id="clientsIn" className='containerMain'>
          <ClientsIn />
        </div>
        <div className='containerMain1'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
