import React from 'react'
import Styles from './ourTeam.module.scss'
import SlideOurTeam from './slideOurTeam/slideOurTeam'
const OurTeam = () => {
    return (
        <>
            <div className={Styles.containerOurTeam}>
                <h3><span>Our  </span>  Team</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown</p>
                <SlideOurTeam />
            </div>
        </>
    )
}

export default OurTeam
