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
import WhyChooseUs from './whyChooseUs/whyChooseUs';
import { Helmet } from 'react-helmet';

const Home = () => {
  UseScrollToTop()
  const homeRef = useRef(null);
  const homeAboutRef = useRef(null);
  const homeServicesRef = useRef(null);
  const ourProjectsRef = useRef(null);
  const ourBlogsRef = useRef(null);

  const location = useLocation();
  console.log("location", location)

  console.log("Hash tag", location.hash.slice(1))
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
  const canonicalUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>Pacteazy - Simplifying Business with Smart Solutions</title>
        <meta
          name="description"
          content="Running a business should be effortless. Our innovative digital solutions streamline processes, enhance efficiency, and drive growth - so you can focus on what truly matters."
        />
        <meta
          name="keywords"
          content="Web Design, Responsive Web Design, Static Website Design, Digital Marketing, Search Engine Optimization (SEO), Social Media Marketing, Enterprise Solutions, API Development, CMS Web Development, MVP Development, Fleet Management, Logistics Software, Finance Software (NBFC), Online Examination System"
        />
          <meta name="author" content="Pacteazy" />
          <meta name="publisher" content="Pacteazy" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
        <div ref={ourBlogsRef} id="chooseUs" className='containerMain'>
          <WhyChooseUs />
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
