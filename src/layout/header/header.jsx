import React, { useState, useEffect } from 'react';
import Styles from './header.module.scss';
import { Images } from '../../shared/utils/images';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paths } from '../../browserRouter/paths/paths';
import ContactUsDialogBox from '../../components/contactus/contactusDialogBox/contactusDialogBox';
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SideDrawer from './sideDrawer/sideDrawer';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setActiveSection(location.hash);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#home', '#about', '#services', '#projects', '#blogs'];
            let foundSection = '';

            for (let section of sections) {
                const el = document.querySelector(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom >= 80) {
                        foundSection = section;
                        break;
                    }
                }
            }
            setActiveSection(foundSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (path, hash) => {
        navigate(path + hash);
        setActiveSection(hash);
    };

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                // className='bla bla bla'
                style={{
                    width: "50%", // Custom width
                    zIndex: 1050, // Custom z-index
                    height: "100%",
                }}
            >
                {/* <button onClick={toggleDrawer}>Close</button> */}
                <SideDrawer onClose={toggleDrawer} />
            </Drawer>
            <div className={Styles.mainContainerHeader}>
                <div className={Styles.containerHeader}>
                    <img
                        src={Images.pactLogo}
                        className={Styles.imgLogo}
                        onClick={() => handleNavClick(Paths.Home, '#home')}
                    />

                    {!open && (
                        <div className={Styles.headerRight}>
                            <span
                                onClick={() => handleNavClick(Paths.Home, '#home')}
                                className={activeSection === '#home' ? Styles.active : Styles.link}
                            >
                                Home
                            </span>
                            <span
                                onClick={() => handleNavClick(Paths.Home, '#about')}
                                className={activeSection === '#about' ? Styles.active : Styles.link}
                            >
                                About Us
                            </span>
                            <span
                                onClick={() => handleNavClick(Paths.Home, '#services')}
                                className={activeSection === '#services' ? Styles.active : Styles.link}
                            >
                                Services
                            </span>
                            <span
                                onClick={() => handleNavClick(Paths.Home, '#projects')}
                                className={activeSection === '#projects' ? Styles.active : Styles.link}
                            >
                                Products
                            </span>
                            <span
                                onClick={() => handleNavClick(Paths.Home, '#blogs')}
                                className={activeSection === '#blogs' ? Styles.active : Styles.link}
                            >
                                Blogs
                            </span>
                        </div>
                    )}


                    {!open && (
                        <div>
                            <div className={Styles.threeLines} onClick={toggleDrawer}>
                                <HiOutlineBars3 />
                            </div>
                            <button
                                className={Styles.btnContactUs}
                                onClick={() => {
                                    setOpen(true);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Let's Connect
                            </button>
                        </div>
                    )}

                    {open && <ContactUsDialogBox onClose={() => setOpen(false)} />}
                </div>
            </div>
        </>
    );
};

export default Header;
