import React from 'react'
import Styles from "./aboutUs.module.scss"
import { Images } from '../../../../shared/utils/images'
import Loader from '../../../../reusables/loader/loader'
const AboutUs = () => {
    return (
        <>
            <div className={Styles.containerAboutUs}>
                <h3>About Us</h3>
                <div className={Styles.content}>
                    {/* <p>ConsultUs provides consulting services that help business owners and leaders build a more valuable business. We worked with their founder to build a professional, modern site that follows the StoryBrand framework to clearly communicates the value it adds to potential clients</p> */}
                    <p>
                        Pacteazy is a professional software services company that simplifies your business processes and streamlines operations. We help you understand where you are now and where you should be to achieve your business goals. Our vision is to make software accessible to all kinds of businesses – small to big, improve productivity and foster exponential growth.
                        At Pacteazy, we endorse think out of a box approach to problem-solving and brainstorm further to curate simple and viable solutions. With expertise in best-of-breed technology and a vast knowledge repository, we create value for our customers through high-quality services. We are a human-centered organization balancing the needs of our people-customers, employees, and community – with changing demands of the modern world. We grow when our people grow.
                    </p>
                    <div>
                        {/* <img src={Images.about2}className={Styles.image2} />
                        <img src={Images.about1}className={Styles.image1} />
                        <img src={Images.about3}className={Styles.image3} /> 
                        */}
                        <img src={Images.about} className={Styles.image} />

                    </div>
                </div>
                <Loader />
            </div>
        </>
    )
}

export default AboutUs
