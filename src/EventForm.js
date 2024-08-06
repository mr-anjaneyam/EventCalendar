import React, { useState } from 'react';
import './EventForm.css'; // Import your custom CSS file for EventForm styles

function EventForm({ day, onSave, onCancel }) {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(day);

  const handleSave = () => {
    onSave(task, date);
    setTask('');
    setDate('');
  };

  return (
    <div className="event-form">
      <h3>Add Task</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task details"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EventForm;
