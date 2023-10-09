import React from 'react';
import s from './styles.module.css'
import EventsCalendarComponent from '../../../components/Profile/EventsCalendar/EventsCalendarComponent';
import {observer} from "mobx-react-lite";

const EventCalendar = () => {
    return (
        <div className={s.calendar}>
           <EventsCalendarComponent />
        </div>
    );
};

export default observer(EventCalendar);