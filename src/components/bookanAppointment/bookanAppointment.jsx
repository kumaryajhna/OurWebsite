import React, { useEffect } from 'react';
import Appointment from './appointment/appointment';
import Footer from '../../layout/footer/footer';

const BookanAppointment = () => {
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
                <div className="scroll-animation">
                    <Appointment/>
                </div>
                <div className="scroll-animation">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default BookanAppointment
