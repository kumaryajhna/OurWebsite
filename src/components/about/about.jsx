import React, { useEffect } from 'react';
import Footer from '../../layout/footer/footer';
import OurClients from '../home/ourClients/ourClients';
import OurTeam from './ourTeam/ourTeam';
import OurMission from './ourMission/ourMission';
import OurCoreValues from './ourCoreValues/ourCoreValues';
import AboutUs from './ourTeam/aboutUs/aboutUs';
import UseScrollToTop from '../../shared/hooks/useScrollToTop';

const About = () => {
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
                {/* <div className="scroll-animation"> */}
                    <AboutUs />
                {/* </div> */}
                <div className="scroll-animation">
                    <OurCoreValues />
                </div>
                <div className="scroll-animation">
                    <OurTeam /> 
                </div>
                <div className="scroll-animation">
                    <OurMission />
                </div>
                <div className="scroll-animation">
                    <OurClients />
                </div>
                <div className="scroll-animation">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About
