import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Styles from './ourProjects.module.scss';
import { useNavigate } from "react-router-dom";
import { Paths } from '../../../browserRouter/paths/paths';
import { OurProductsHome } from '../../../shared/utils/arrayData';
import MobileProducts from './mobileProducts/mobileProducts';

const OurProjects = () => {
    const navigate = useNavigate();
    const navigateProducts = () => navigate(Paths.Products);

    const createItemTabsDup = [
        { id: 1, label: "Rental Application " },
        { id: 2, label: "Finance(NBFC)  " },
        { id: 3, label: "Bizstarter " },
        { id: 4, label: "GPS/Fleet Management  " },//Application
        // { id: 5, label: "Inbound and outbound logistics application " },
        { id: 5, label: "Logistics  " },//application

        { id: 6, label: "Event Management " },
        { id: 7, label: "Online Examination " },

    ];

    const [activeIndex, setActiveIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the component is visible
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const renderComponent = useCallback(() => {
        const filteredProducts = OurProductsHome.filter(product => product.id === activeIndex);
        if (filteredProducts.length === 0) return <div>No products found for this tab.</div>;

        return (
            <>
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        className={Styles.productItem}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 90, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h5>{product.projectName}</h5>
                        <p>{product.description}</p>
                        <img src={product.img} alt={product.projectName} />
                    </motion.div>
                ))}
            </>
        );
    }, [activeIndex, isVisible]);

    return (
        <div ref={containerRef} className={Styles.containerOurProjects}>
            <h3><span>Our</span> Products</h3>
            <div className={Styles.containerTabs}>
                {/* Left Section: Tabs */}
                <motion.div
                    className={Styles.containerTabsName}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {createItemTabsDup.map((e) => (
                        <motion.div
                            key={e.id}
                            className={activeIndex === e.id ? Styles.activeLabel : Styles.label}
                            onClick={() => setActiveIndex(e.id)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {e.label}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right Section: Products */}
                <motion.div
                    className={Styles.componentContainer}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {renderComponent()}
                </motion.div>
            </div>
            <div className={Styles.containerMobileTabs}>
                <MobileProducts />
            </div>
        </div>
    );
};

export default OurProjects;
