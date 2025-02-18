import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calenderAppointment.scss';  // Import your custom CSS
const CalenderAppointment = () => {
    return (
        <>
            <div>
                <Calendar
                formatShortWeekday={(locale, date) =>
                    date.toLocaleDateString(locale, { weekday: "short" }).charAt(0)
                  } />
            </div>
        </>
    )
}

export default CalenderAppointment
