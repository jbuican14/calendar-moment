import React, { useState } from 'react';
import moment from 'moment';

import './App.css';

function App() {
  const [calendar, setCalendar] = useState([]);
  const [setMoment, getMoment] = useState(moment());

  const startDay = setMoment.clone().startOf('month').startOf('isoWeek');
  const endDay = setMoment.clone().endOf('month').endOf('isoweek');
  const day = startDay.clone().subtract(1, 'day');
  // console.log(day);

  const temp = [];

  while (day.isBefore(endDay, 'day')) {
    // use moment method
    //if day is still before the end day
    console.log(endDay);
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  setCalendar(temp);
  console.log(calendar);
  return (
    <div className="App">
      {calendar.map((week, idx) => (
        <div className="month" key={idx}>
          {week.map((day) => (
            <div className="day">{day.format('D').toString()}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
