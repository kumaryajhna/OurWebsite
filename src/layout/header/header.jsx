import React from 'react'
import Styles from "./header.module.scss"
import { Images } from '../../shared/utils/images'
import { NavLink } from "react-router-dom";
import { Paths } from '../../browserRouter/paths/paths'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const handleClickContact = () => {
        navigate(Paths.Contactus); // Programmatically navigate to the "/about" route
    };

    const handleHome = () => {
        navigate(Paths.Home); // Programmatically navigate to the "/about" route
    };

    return (
        <>
            <div className={Styles.containerHeader}>
                <img src={Images.logo} className={Styles.imgLogo}  onClick={handleHome}/>
                <div className={Styles.headerRight}>
                    <NavLink to={Paths.Home} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                        Home
                    </NavLink>
                    <NavLink to={Paths.About} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                        About
                    </NavLink>
                    <NavLink to={Paths.Products} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                        Products
                    </NavLink>  <NavLink to={Paths.Services} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                        Services
                    </NavLink>  <NavLink to={Paths.Blogs} className={(navData) => (navData.isActive ? Styles.active : Styles.link)}>
                        Blogs
                    </NavLink>

                    <button className={Styles.btnContactUs} onClick={handleClickContact}>Contact Us</button>


                </div>
            </div >
        </>
    )
}

export default Header
