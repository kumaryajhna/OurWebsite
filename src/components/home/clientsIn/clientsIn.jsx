import React, { useEffect, useState, useRef } from "react";
import Styles from "./clientsIn.module.scss";
import { ClientsInInfo } from "../../../shared/utils/arrayData";

const ClientsIn = () => {
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false); // Reset animation when out of view
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the component is visible
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
        <div ref={sectionRef} className={Styles.containerHomeClients}>
            <h3><span>Our</span> Clients In</h3>
            <div className={Styles.ourClientsIn}>
                {ClientsInInfo.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`${Styles.blockServices} ${animate ? Styles[`blockAnimate${index % 4}`] : ""}`}
                    >
                        <img src={item.img} alt={item.header} loading="lazy" />
                        <h6>{item.header}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsIn;
