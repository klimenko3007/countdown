const MS_PER_SECOND = 1000
const MS_PER_MINUTE = MS_PER_SECOND * 60
const MS_PER_HOUR = MS_PER_MINUTE * 60
const MS_PER_DAY = MS_PER_HOUR * 24

export const eventDoneMessage = 'The event has already occurred.'

export const formatTimeLeft = (eventDate: Date): string => {
  const currentDate = new Date()
  let timeLeft = eventDate.getTime() - currentDate.getTime()

  const days = Math.floor(timeLeft / MS_PER_DAY)
  const hours = Math.floor((timeLeft % MS_PER_DAY) / MS_PER_HOUR)
  const minutes = Math.floor((timeLeft % MS_PER_HOUR) / MS_PER_MINUTE)
  const seconds = Math.floor((timeLeft % MS_PER_MINUTE) / MS_PER_SECOND)

  return `${days} days, ${hours} h, ${minutes} m, ${seconds} s`
}
