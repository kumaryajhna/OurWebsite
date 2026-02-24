import React, { useState, useCallback, useRef, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Styles from './ourProjects.module.scss';
import { useNavigate } from "react-router-dom";
import { Paths } from '../../../browserRouter/paths/paths';
import { OurProductsHomeDup } from '../../../shared/utils/arrayData';
import { Helmet } from 'react-helmet';

// Lazy load the MobileProducts component
const MobileProducts = lazy(() => import('./mobileProducts/mobileProducts'));

const OurProjects = () => {
    const navigate = useNavigate();
    const navigateProducts = () => navigate(Paths.Products);

    const createItemTabsDup = [
        { id: 1, label: "Rental Application " },
        { id: 2, label: "Finance(NBFC)  " },
        { id: 3, label: "Bizstarter " },
        { id: 4, label: "GPS/Fleet Management  " },
        { id: 5, label: "Logistics  " },
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
        if (!isVisible) return null; // Avoid unnecessary rendering when not visible

        const filteredProducts = OurProductsHomeDup.filter(product => product.id === activeIndex);
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
                        <img src={product.img} alt={product.projectName} loading="lazy" />
                        {/* <img src={product.img} alt={product.projectName} loading="lazy" /> */}
                        {/* <Helmet>
                            <link rel="preload" as="image" href={product.img} />
                        </Helmet> */}
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

            {/* Lazy Load Mobile Products */}
            <div className={Styles.containerMobileTabs}>
                <Suspense fallback={<div></div>}>
                    <MobileProducts />
                </Suspense>
            </div>
        </div>
    );
};

export default OurProjects;
// Loading...