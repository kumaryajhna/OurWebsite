import React, { useEffect } from 'react';
import BusinessSimple from './businessSimple/businessSimple';
import OurProjects from './ourProjects/ourProjects';
import OurBlogs from './ourBlogs/ourBlogs';
import ClientStories from './clientStories/clientStories';
import OurClients from './ourClients/ourClients';
import Footer from '../../layout/footer/footer';
import StoriesClient from './storiesClient/clientStories';
import UseScrollToTop from '../../shared/hooks/useScrollToTop';
import HomeAbout from './homeAbout/homeAbout';
import HomeServices from './homeServices/homeServices';

const Home = () => {
  UseScrollToTop()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div>
        <BusinessSimple />
        <div className="scroll-animation">
          <HomeAbout/>
        </div>
        <div className="scroll-animation">
          <HomeServices/>
        </div>
        <div className="scroll-animation">
          <OurProjects />
        </div>
        <div className="scroll-animation">
          <OurBlogs comp="home" />
        </div>
        <div className="scroll-animation">
          {/* <ClientStories /> */}
          {/* <StoriesClient /> */}
        </div>
        <div className="scroll-animation">
          {/* <OurClients /> */}
        </div>
        <div className="scroll-animation">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
