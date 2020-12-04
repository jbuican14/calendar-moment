export default function buildCalendar(value) {
  const startDay = value.clone().startOf('month').startOf('isoWeek');
  const endDay = value.clone().endOf('month').endOf('isoweek');

  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    // use moment method
    //if day is still before the end day
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  return calendar;
}
