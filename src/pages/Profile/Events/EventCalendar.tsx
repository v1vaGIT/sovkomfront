import React from 'react';
import s from './styles.module.css'
import EventsCalendarComponent from '../../../components/Profile/EventsCalendar/EventsCalendarComponent';
const EventCalendar = () => {
    return (
        <div className={s.calendar}>
           <EventsCalendarComponent />
        </div>
    );
};

export default EventCalendar;