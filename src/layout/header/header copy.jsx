import React, { useState } from 'react'
import Styles from "./header.module.scss"
import { Images } from '../../shared/utils/images'
import { NavLink } from "react-router-dom";
import { Paths } from '../../browserRouter/paths/paths'
import { useNavigate } from 'react-router-dom';
import ContactUsDialogBox from '../../components/contactus/contactusDialogBox/contactusDialogBox';

const Header = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const handleClickContact = () => {
        navigate(Paths.Contactus);
    };

    const handleHome = () => {
        navigate(Paths.Home);
    };
    const [open, setOpen] = useState(false);


    return (
        <>
            <div className={Styles.containerHeader}>
                {/* <img src={Images.logo} className={Styles.imgLogo} onClick={handleHome} /> */}
                <img src={Images.pactLogo} className={Styles.imgLogo} onClick={handleHome} />

                {!open && (
                    <div className={Styles.headerRight}>
                        <NavLink to={Paths.Home} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                            Home
                        </NavLink>
                        <NavLink to={Paths.About} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                            About Us
                        </NavLink>
                        <NavLink to={Paths.Services} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                            Services
                        </NavLink>
                        <NavLink to={Paths.Products} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                            Products
                        </NavLink>
                        <NavLink to={Paths.Blogs} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                            Blogs
                        </NavLink>

                    </div>
                )}
                {/* <button className={Styles.btnContactUs} onClick={handleClickContact}>Contact Us</button> */}
                {/* <button className={Styles.btnContactUs} onClick={() => setOpen(true)}>Let's Connect</button> */}
                {!open && (
                    <button
                        className={Styles.btnContactUs}
                        onClick={() => {
                            setOpen(true);
                            window.scrollTo(0, 0);
                        }}
                    >
                        Let's Connect
                    </button>
                )}
                {open && <ContactUsDialogBox onClose={() => setOpen(false)} />}
            </div >
        </>
    )
}

export default Header
