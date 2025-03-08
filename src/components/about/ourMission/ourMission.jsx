import React, { useEffect, useRef, useState } from "react";
import Styles from "./ourMission.module.scss";

const OurMission = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Update visibility state
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={Styles.containerOurMission}>
            <div className={`${Styles.containerOurMissionLeft} ${isVisible ? Styles.slideUp : ""}`}>
                <span>Mission</span>
                <span></span>
                <span>Vision</span>
                <span></span>
                <div className={Styles.ourMission}>
                    To empower businesses with smart solutions that simplify operations, drive innovation, and deliver operational excellence.
                </div>
                <div className={Styles.ourVision}>
                    To be the leading global technology partner, delivering smart solutions that redefine innovation and operational excellence.
                </div>

            </div>

            <div className={`${Styles.missionVision} ${isVisible ? Styles.slideUp : ""}`}>

                <div className={Styles.ourMissionText}>
                    <h2>Our Mission</h2>
                    <span>To empower businesses with smart solutions that simplify operations, drive innovation, and deliver operational excellence.</span>
                </div>
                <div className={Styles.ourMissionText}>
                    <h2>Our Vision</h2>
                    <span>To be the leading global technology partner, delivering smart solutions that redefine innovation and operational excellence.</span>
                </div>
            </div>

            <div className={`${Styles.containerOurMissionRight} ${isVisible ? Styles.slideDown : ""}`}>
                <div className={Styles.ourMission1}>
                    At Patcteazy Software Services, we are committed to transforming businesses through innovative technology solutions to empower organizations with smart, scalable, and future-ready software that drives efficiency, growth, and success in an ever-evolving digital landscape.

                </div>
                <div className={Styles.ourMission1}>
                    With a strong focus on operational excellence and cutting-edge innovation, we collaborate with clients across diverse industries to craft technology solutions tailored to their unique business needs. From custom software development and automation to digital transformation and enterprise solutions, we combine creativity and deep technical expertise to deliver solutions that drive meaningful impact and measurable results.
                </div>
                <div className={Styles.ourMission1}>

                    At Patcteazy, we believe in fostering long-term partnerships built on trust, quality, and a shared vision for success. As we continue to grow, our focus remains steadfast on harnessing emerging technologies to solve complex challenges and create lasting value for our clients.
                </div>
            </div>
        </div>
    );
};

export default OurMission;
