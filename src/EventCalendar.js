import React, { useState } from 'react';
import EventForm from './EventForm';

function EventCalendar({ events, addEvent, modifyEvent, deleteEvent }) {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleAddEvent = (task, day) => {
    addEvent(day, task);
    setSelectedDay(null);
  };

  const handleModifyEvent = (day, updatedDetails) => {
    modifyEvent(day, updatedDetails);
    setSelectedDay(null);
  };

  const handleDeleteEvent = (day) => {
    deleteEvent(day);
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div className="calendar">
        {Object.keys(events).map((day) => (
          <div key={day}>
            <span>{day}</span>
            <span>{events[day]}</span>
            <button onClick={() => handleModifyEvent(day, prompt('Enter updated event details'))}>
              Modify
            </button>
            <button onClick={() => handleDeleteEvent(day)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => setSelectedDay(new Date().toISOString().slice(0, 10))}>Add Event</button>
      {selectedDay && (
        <EventForm
          day={selectedDay}
          onSave={handleAddEvent}
          onCancel={() => setSelectedDay(null)}
        />
      )}
    </div>
  );
}

export default EventCalendar;
