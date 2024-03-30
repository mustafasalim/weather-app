export const getDaysOfWeek = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const dayInAweek = new Date().getDay()
  const forecastDays = daysOfWeek
    .slice(dayInAweek, daysOfWeek.length)
    .concat(daysOfWeek.slice(0, dayInAweek))

  return forecastDays
}
