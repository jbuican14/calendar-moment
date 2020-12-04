import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';
import buildCalendar from './calendar/build';
import dayStyles from './calendar/styles';
import CalendarHeader from './calendar/header';

function App() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  // console.log(value);

  return (
    <div className="App">
      <CalendarHeader value={value} setValue={setValue} />
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
