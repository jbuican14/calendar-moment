import React from 'react';
import moment from 'moment';

import Calendar from './calendar';
import './App.css';

function App() {
  const getMoment = moment();
  const startDay = getMoment.clone().startOf('isoWeek');
  const endDay = getMoment.clone().endOf('isoweek');
  return (
    <div className="App">
      {startDay.format('MM/DD')} - {endDay.format('MM/DD')}{' '}
    </div>
  );
}

export default App;
