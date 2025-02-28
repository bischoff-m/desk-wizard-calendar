import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import iCalendarPlugin from "@fullcalendar/icalendar";
import { useEffect, useRef } from "react";
import React from "react";

// https://fullcalendar.io/docs#toc

// TODO: Use https://www.npmjs.com/package/@googleapis/calendar to fetch events from
// Google Calendar

export default function CalendarComponent() {
    const calendarRef = useRef<FullCalendar | null>(null);

    useEffect(() => {
        if (!calendarRef.current) return;

        const calendar = calendarRef.current.getApi();
        calendar.addEventSource({
            url: "/basic.local.ics",
            format: "ics",
            color: "#6e7ab6",
        });
        calendar.addEventSource({
            url: "/uni.local.ics",
            format: "ics",
            color: "#f4511e",
        });
        calendar.addEventSource({
            url: "/work.local.ics",
            format: "ics",
            color: "#8f609e",
        });
    }, [calendarRef.current]);

    return (
        <div>
            {/* <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, iCalendarPlugin]}
            initialView="dayGridMonth"
            firstDay={1}
            height="100%"
            eventTimeFormat={{
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }}
            /> */}
            Yepppp
        </div>
    );
}
