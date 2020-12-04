import React from 'react';

export default function CalendarHeader({ value, setValue }) {
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

  function thisMonth() {
    return value.isSame(new Date(), 'month');
  }

  return (
    <div className="header">
      <div
        className="prev"
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        {!thisMonth() ? (
          <span class="active">&lt; </span>
        ) : (
          <span class="deactive">&lt; </span>
        )}
      </div>
      <div className="current">
        {currentMonthName()} {currentYear()}
      </div>
      <div className="next" onClick={() => setValue(nextMonth())}>
        {' '}
        &gt;
      </div>
    </div>
  );
}
