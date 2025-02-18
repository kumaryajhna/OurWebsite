import React, { useEffect } from 'react';
import ServicesList from './servicesList/servicesList';
import Footer from '../../layout/footer/footer';
import { Images } from '../../shared/utils/images';
import Technology from './technology/technology';
import UseScrollToTop from '../../shared/hooks/useScrollToTop';

const Services = () => {
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
                    <ServicesList />
                {/* </div> */}
                <div className="scroll-animation">
                    <Technology />
                </div>
                <div className="scroll-animation">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Services
