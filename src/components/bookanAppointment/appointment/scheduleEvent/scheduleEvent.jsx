import React from 'react'
import Styles from "./scheduleEvent.module.scss"
import { MdOutlineVerified } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const ScheduleEvent = () => {
    return (
        <>
            <div className={Styles.containerSchedule}>
                <div className={Styles.headerSchedule} >
                    <MdOutlineVerified size={30} color='#48A500' />
                    <h5>You Are Scheduled </h5>
                </div>
                <p>A calendar invitation has been sent to your email address</p>
                <div className={Styles.invitation}>
                    <span>Open Invitation</span>
                    <CiShare1 />
                </div>
                <div className={Styles.scheduleDetails}>
                    <h6>Personalized ERP Consultation</h6>
                    <div className={Styles.iconNameText}>
                        <FaUser  size={16}/>
                        <h5>Pacteazy software services.LLP </h5>
                    </div>
                    <div className={Styles.iconNameText}>
                        <CiCalendar size={20} className={Styles.iconCalender} />
                        <h5>
                            09:00 am  to 09:30 am Wednesday Jan 31,2024 ,IST
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleEvent
