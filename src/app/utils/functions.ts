export const formatTimeLeft = (eventDate: Date): string => {
  const currentDate = new Date()
  let timeLeft = eventDate.getTime() - currentDate.getTime()

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  timeLeft -= days * (1000 * 60 * 60 * 24)
  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
  timeLeft -= hours * (1000 * 60 * 60)
  const minutes = Math.floor(timeLeft / (1000 * 60))
  timeLeft -= minutes * (1000 * 60)
  const seconds = Math.floor(timeLeft / 1000)

  // Format the result
  return `${days} days, ${hours} h, ${minutes} m, ${seconds} s`
}
