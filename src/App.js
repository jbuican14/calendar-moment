import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';
import buildCalendar from './calendar/build';
import dayStyles from './calendar/styles';

function App() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  // console.log(value);
  function currentMonthName() {
    return value.format('MMMM');
  }
  function currentYear() {
    return value.format('YYYY');
  }
  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }
  function nextMonth() {
    return value.clone().add(1, 'month');
  }
  return (
    <div className="App">
      <div className="header">
        <div className="prev" onClick={() => setValue(prevMonth())}>
          {' '}
          &lt;
        </div>
        <div className="current">
          {currentMonthName()} {currentYear()}
        </div>
        <div className="next" onClick={() => setValue(nextMonth())}>
          {' '}
          &gt;
        </div>
      </div>
      <div className="body">
        {calendar.map((week, id) => (
          <div className="month" key={id}>
            {week.map((item, idx) => (
              <div
                key={idx}
                className="day"
                onClick={() => setValue(item)}
                className={dayStyles(item, value)}
              >
                {item.format('D').toString()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
