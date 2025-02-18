import React from 'react'
import Styles from './ourProjects.module.scss'
import SlideProjects from './slideProjects/slideProjects'
import { BsArrowRight } from "react-icons/bs";
import { Images } from '../../../shared/utils/images';
import { Paths } from '../../../browserRouter/paths/paths';
import { useNavigate } from "react-router-dom";
const OurProjects = () => {
      const navigate = useNavigate();
      const navigateProducts =()=>{
        navigate(Paths.Products)
      }
    return (
        <>
            <div className={Styles.containerOurProjects}>
                <h3><span>Our</span> Projects</h3>
                <div className={Styles.sideShow}><SlideProjects /></div>
                <button className={Styles.btnArrow} onClick={navigateProducts}><BsArrowRight size={16} /></button>

                <div className={Styles.mission}>
                    <div className={Styles.missionInfo}>
                        <div>
                            <h2>Our Mission</h2>
                            <p>We empower enterprises to innovate and transform by co-creating impactful software solutions.</p>
                        </div>
                        <div>
                            <h2>Our Vision</h2>
                            <p>To change the world for good through technology.</p>
                        </div>
                    </div>
                    <div><img src={Images.ourMission} /></div>
                </div>
            </div>
        </>
    )
}

export default OurProjects
