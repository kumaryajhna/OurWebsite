import React, { useState } from 'react'
import Styles from "./appointment.module.scss"
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import CalenderAppointment from './calenderAppointment/calenderAppointment';
import ScheduleEvent from './scheduleEvent/scheduleEvent';



const Appointment = () => {
    const times = [];

    for (let hour = 9; hour <= 17; hour++) {
        times.push(`${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`);
        times.push(`${hour}:30 ${hour < 12 ? 'AM' : 'PM'}`);
    }

    // Add the last two time slots (6:00 PM and 6:30 PM)
    times.push('6:00 PM');
    times.push('6:30 PM');
    const [data, setDates] = useState(true)
    const [appointmentForm, setAppointmentForm] = useState(false)
    const [blockHide, setBlockHide] = useState(true)
    const [schedule, setSchedule] = useState(false)
    const handleClickHideDate = () => {
        setDates(false)
        setAppointmentForm(true)
    }
    const handleClickBack = () => {
        setDates(true)
        setAppointmentForm(false)
    }
    const handleClickSchedule = () => {
        setBlockHide(false)
        setSchedule(true)
    }
    return (
        <>
            <div className={Styles.containerAppointment}>
                <h3><span>Book An</span>  Appointment</h3>
                <div className={Styles.infoAppointemnt}>
                    {
                        blockHide &&

                        <div>
                            <div className={Styles.details}>
                                <div className={Styles.headerInfo}>
                                    <h6>Personalized ERP Consultation</h6>
                                    <div>
                                        <CiCalendar size={25} className={Styles.iconCalender} />
                                        <span>
                                            09:00 am  to 09:30 am Wednesday Jan 31,2024 ,IST
                                        </span>
                                    </div>
                                </div>
                                <div className={Styles.clockText}>
                                    <GoClock size={20} color="#14142b" className={Styles.iconCalender} />
                                    <span>30 min</span>
                                </div>
                                <p>To provide you with undivided attention, we would like to offer you the opportunity to book an appointment with one of our ERP specialists.  this consultation, we will discuss your unique requirements, answer any questions you may have, and provide recommendations.</p>
                            </div>
                            <div className={Styles.lineAppointment}></div>
                            {
                                data &&
                                <div className={Styles.calenderTime}>
                                    <div className={Styles.mycalendar}>
                                        <h5>Select A Date</h5>

                                        <CalenderAppointment />
                                    </div>
                                    <div className={Styles.formTiming}>
                                        <div className={Styles.formTimingHeader}>
                                            <h5>Select A Time</h5>
                                            <div className={Styles.labelSelect}>
                                                <label>Time Zone</label>
                                                <select
                                                    className={`form-select ${Styles.selectField}`}
                                                    aria-label="Default select example"
                                                >
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={Styles.timings}>
                                            {times.map((time, index) => (
                                                <div key={index} className={Styles.dateTimes}>{time}</div>
                                            ))}
                                        </div>
                                        <div className={Styles.button}>
                                            <button className={Styles.btnNext} onClick={handleClickHideDate} >Next</button>

                                        </div>

                                    </div>
                                </div>
                            }
                            {
                                appointmentForm &&
                                <div className={Styles.enterDetails}>
                                    <h5>Entar Details</h5>
                                    <div className={Styles.formEnter}>
                                        <div className={Styles.inputlabel}>
                                            <label>Name *</label>
                                            <input type="text" placeholder="Name" className={`form-control ${Styles.formControl}`} />
                                        </div>
                                        <div className={Styles.inputlabel}>
                                            <label>Email *</label>
                                            <input type="text" placeholder="Email" className={`form-control ${Styles.formControl}`} />
                                        </div>
                                        <div className={Styles.inputlabel}>
                                            <label>Phone Number *</label>
                                            <input type="text" placeholder="Phone Number" className={`form-control ${Styles.formControl}`} />
                                        </div>
                                        <div className={Styles.inputlabel}>
                                            <label>Company Name *</label>
                                            <input type="text" placeholder="Company Name " className={`form-control ${Styles.formControl}`} />
                                        </div>
                                        <div className={Styles.inputlabel}>
                                            <label>Location *</label>
                                            <input type="text" placeholder="Location " className={`form-control ${Styles.formControl}`} />
                                        </div>
                                        <div className={Styles.inputlabel}>
                                            <label>Industry *</label>
                                            <input type="text" placeholder="Industry " className={`form-control ${Styles.formControl}`} />
                                        </div>
                                        <div className={Styles.inputlabel}>
                                            <label>Please share anything that will help prepare for our meeting.</label>
                                            <textarea type="text" placeholder="Message" className={`form-control ${Styles.formControlTextAre}`} />
                                        </div>
                                        <div className={Styles.formBtns}>
                                            <button className={Styles.btnBack} onClick={handleClickBack} >Back</button>
                                            <button className={Styles.btnEnent} onClick={handleClickSchedule} >Schedule Event</button>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    }

                    {
                        schedule &&
                        <div>
                            <ScheduleEvent />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Appointment


{/* <textarea type="text" placeholder="Message" className={`form-control ${Styles.formControlTextAre}`} /> */ }
