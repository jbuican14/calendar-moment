import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';
import buildCalendar from './calendar/build';

function App() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [setValue]);

  console.log(value);
  function isSelectedDay(day) {
    return value.isSame(day, 'day');
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), 'day');
  }

  function isToday(day) {
    return day.isSame(new Date(), 'day');
  }

  function dayStyles(day) {
    if (beforeToday(day)) return 'before';
    if (isSelectedDay(day)) return 'selected';
    if (isToday(day)) return 'today';
    return '';
  }

  return (
    <div className="App">
      {calendar.map((week, id) => (
        <div className="month" key={id}>
          {week.map((item, idx) => (
            <div
              key={idx}
              className="day"
              onClick={() => setValue(item)}
              className={dayStyles(item)}
            >
              {item.format('D').toString()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
