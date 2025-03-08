/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Styles from "./sideDrawer.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';

import ContactUsDialogBox from "../../../components/contactus/contactusDialogBox/contactusDialogBox";
import ContactusDialogBoxMobile from "../../../components/contactus/contactusDialogBoxMobile/contactusDialogBoxMobile";
import { Paths } from "../../../browserRouter/paths/paths";

const SideDrawer = ({ onClose }) => {
  // const [userDetails, setUserDetails] = useState(getFromLocalStorage("user"));
  // const [user, setUser] = useRecoilState(userState);

    const navigate = useNavigate();


  const [open, setOpen] = useState(false);
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
    onClose();
  };

  return (
    <>
      {/* {!open && ( */}
      <div className={Styles.containerSideDrawer}>
        <div className={Styles.headerSideDrawer}>
          <h3>Menu</h3>
          <IoClose className={Styles.iconClose} onClick={onClose} />
        </div>
        <div className={Styles.navigations}>
          {/* {!open && ( */}
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
          {/* )} */}
        </div>
        {/* <button
          className={Styles.btnContactUs}
          onClick={() => {
            setOpen(true);
            window.scrollTo(0, 0);
          }}
        >
          Let's Connect
        </button> */}
      </div>
      {/* )} */}
      {open &&
        <div className="mobileContactUs">
          <ContactusDialogBoxMobile onClose={() => setOpen(false)} />
        </div>
      }
    </>
  );
};

export default SideDrawer;
