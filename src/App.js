import React from 'react';
import moment from 'moment';

import Calendar from './calendar';
import './App.css';

function App() {
  const getMoment = moment();
  const startDay = getMoment.clone().startOf('month').startOf('isoWeek');
  const endDay = getMoment.clone().endOf('month').endOf('isoweek');
  const day = startDay.clone().subtract(1, 'day');
  console.log(day);
  const calendar = [];

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
  console.log(calendar);
  return (
    <div className="App">
      {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div>{day.format('D').toString()}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
