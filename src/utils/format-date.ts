export function formatDate(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    "en-US",
    options
  )
  return dateFormatter.format(date)
}

console.log(formatDate("2023-05-15"))

console.log(formatDate())
