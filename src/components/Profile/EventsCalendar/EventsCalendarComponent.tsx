import React, { FC } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import './style.css'

import { events } from '../../../../fakeData/events.js'
import { observer } from "mobx-react-lite";
const EventsCalendarComponent: FC = () =>  {
  let firstDaty = 1;

  

  return (
    <>
      <FullCalendar
        firstDay={firstDaty}
        locale="ru"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today"
        }}
        themeSystem="Cosmo"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </>
  );
}

export default observer(EventsCalendarComponent)