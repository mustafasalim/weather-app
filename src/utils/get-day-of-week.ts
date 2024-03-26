export function getDaysOfWeek() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Sun"]

  const dayInAweek = new Date().getDate()
  const forecastDays = daysOfWeek
    .slice(dayInAweek, daysOfWeek.length)
    .concat(daysOfWeek.slice(0, dayInAweek))

  return forecastDays
}
