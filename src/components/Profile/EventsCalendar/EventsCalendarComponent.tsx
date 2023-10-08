import React, { FC } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { events } from '../../../../fakeData/events.js'
import { observer } from "mobx-react-lite";
const EventsCalendarComponent: FC = () =>  {
  let firstDaty = 1;

  return (
    <>
      <FullCalendar
        //defaultView="dayGridMonth"
        firstDay={firstDaty}
        locale="ru"
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay"
        // }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events.data}
      />
    </>
  );
}

export default observer(EventsCalendarComponent)