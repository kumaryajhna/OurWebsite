import React from 'react'
import Styles from "./homeAbout.module.scss"
import OurMission from '../../about/ourMission/ourMission'
import { BsArrowRight } from "react-icons/bs";
import { Paths } from '../../../browserRouter/paths/paths';
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
    const navigate = useNavigate();
    const navigateProducts = () => {
        navigate(Paths.About)
    }
    return (
        <>
            <div className={Styles.containerHomeAbout}>
                <h3><span>About</span> Us</h3>
                <OurMission />
                {/* <button className={Styles.btnArrow} onClick={navigateProducts}><BsArrowRight size={16} /></button> */}
            </div>
        </>
    )
}

export default HomeAbout
