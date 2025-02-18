import React from 'react'
import Styles from './ourMission.module.scss'
const OurMission = () => {
    return (
        <>
            <div className={Styles.containerOurMission}>
                <span>Mission</span>
                <span></span>
                <span>Vision</span>
                <span></span>
                <div className={Styles.ourMission}>To build and implement innovative digital solutions to our customers by helping their businesses grow better with best of breed technology and high-quality services.</div>
                <div className={Styles.ourVision}>To build and implement innovative digital solutions to our customers by helping their businesses grow better with best of breed technology and high-quality services.</div>

            </div>
        </>
    )
}

export default OurMission
