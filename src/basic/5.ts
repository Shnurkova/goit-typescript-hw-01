enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  switch (day) {
    case DayOfWeek.Saturday:
      return true;
    case DayOfWeek.Sunday:
      return true;
    default:
      return false;
  }
};
