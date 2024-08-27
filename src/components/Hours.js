// Placeholder to host a component
import React from "react";

const Hours = () => {
    const days = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "9:00", close: "20:00" },
        { day: "Sunday", open: "9:00", close: "20:00" },
    ]

    const prueba = "Hola Mundo"
    
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    const todayHours = days.find((day) => day.day === today);
    
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
        </div>
    )
}

export default Hours;
