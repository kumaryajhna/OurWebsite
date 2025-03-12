import React, { useEffect, useRef, useState } from "react";
import Styles from "./homeServices.module.scss";
import { Paths } from "../../../browserRouter/paths/paths";
import { useNavigate } from "react-router-dom";
import { OurHomeList } from "../../../shared/utils/arrayData";



const HomeServices = () => {
    const navigate = useNavigate();
    const servicesRef = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleIndexes((prevIndexes) => {
                    const newIndexes = [...prevIndexes];
                    entries.forEach((entry) => {
                        const index = servicesRef.current.indexOf(entry.target);
                        if (entry.isIntersecting) {
                            if (!newIndexes.includes(index)) newIndexes.push(index);
                        } else {
                            const indexToRemove = newIndexes.indexOf(index);
                            if (indexToRemove !== -1) newIndexes.splice(indexToRemove, 1);
                        }
                    });
                    return newIndexes;
                });
            },
            { threshold: 0.3 } // Adjust threshold to trigger animations earlier
        );

        servicesRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={Styles.containerHomeSev}>
            <h3><span> Our</span> Services </h3>
            {/* <img src={GifMarketing} alt="Laptop Animation"  style={{width:'100px'}} /> */}
            {/* <AnimatedIcon/> */}
            <div className={Styles.ourServices}>
                {OurHomeList.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => (servicesRef.current[index] = el)}
                        className={`${Styles.blockServices} ${visibleIndexes.includes(index)
                            ? index % 2 === 0
                                ? Styles.slideIn
                                : Styles.slideInReverse
                            : index % 2 === 0
                                ? Styles.slideOut
                                : Styles.slideOutReverse
                            }`}
                    >
                        <div className={Styles.srvImg}>
                            <img src={item.img} alt={item.header} style={{ width: '70px' }}  />
                            {/* <img src={GifMarketing} alt="Laptop Animation" style={{ width: '100px' }} /> */}

                        </div>
                        {/* <>🏢 </> */}
                        <h6 className={Styles.blockServicesHeder}>{item.header}</h6>
                        <ul className="blinkingList" style={{ paddingLeft: "0" }}>
                            {item.listOfData.map((data, index) => (
                                <li key={index} className="blinking-dot">{data}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeServices;
