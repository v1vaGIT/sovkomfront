import { FC } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import './style.css'

import { observer } from "mobx-react-lite";
const EventsCalendarComponent: FC = () =>  {
  let firstDaty = 1;

  const events = [
    { title: "Курс по React", start: getDate("YEAR-MONTH-01") },
    { title: "Курс Как стать успешным", start: getDate("YEAR-MONTH-10"), backgroundColor: "darkblue", borderColor: "darkblue" },
    { title: "Курс по PHP", start: getDate("YEAR-MONTH-15") },
    { title: "Курс Успешного Успеха", start: getDate("YEAR-MONTH-19"), backgroundColor: "darkblue", borderColor: "darkblue" },
    { title: "Курс по JS", start: getDate("YEAR-MONTH-20") },
    { title: "Закрытия сезона отчетов", start: getDate("YEAR-MONTH-25"), backgroundColor: "red", borderColor: "red" },
    { title: "Корпоратив", start: getDate("YEAR-MONTH-29"), backgroundColor: "black", borderColor: "black" }
  ];

  function getDate(dayString: string): string {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
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