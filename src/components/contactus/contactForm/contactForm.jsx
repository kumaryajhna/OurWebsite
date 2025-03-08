import React from 'react'
import Styles from "./contactForm.module.scss"
import { Images } from '../../../shared/utils/images'

const ContactForm = () => {
    return (
        <>
            <div className={Styles.containerContact}>
                <div className={Styles.formContact}>
                    <div>
                        <h4>Let's Build something <span>Unique!</span></h4>
                        {/* <h2 >Unique!</h2> */}
                    </div>
                    <div className={Styles.form}>
                        <input type="text" placeholder="Name" className={`form-control ${Styles.formControl}`} />
                        <input type="text" placeholder="Email" className={`form-control ${Styles.formControl}`} />
                        <input type="text" placeholder="Phone Number" className={`form-control ${Styles.formControl}`} />
                        <input type="text" placeholder="Subject" className={`form-control ${Styles.formControl}`} />
                        <textarea type="text" placeholder="Message" className={`form-control ${Styles.formControlTextAre}`} />
                        <button className={Styles.sendAppointment}>Send Request</button>
                    </div>
                </div>
                <div>
                    <img src={Images.person} className={Styles.personImg} />
                </div>
            </div>
        </>

    )
}

export default ContactForm

