import React, { useEffect } from 'react';
import Footer from '../../layout/footer/footer';
import OurClients from '../home/ourClients/ourClients';
import OurBlogs from '../home/ourBlogs/ourBlogs';
import AllBlogs from './allBlogs/allBlogs';
import UseScrollToTop from '../../shared/hooks/useScrollToTop';
const Blogs = () => {
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
                    <OurBlogs comp="blogs" />
                {/* </div> */}
                <div className="scroll-animation">
                    <AllBlogs />
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

export default Blogs
