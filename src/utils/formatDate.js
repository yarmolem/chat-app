import moment from 'moment'

export const formatHour = (date) => {
  const hour = moment(date)
  return hour.format('h:mm a')
}
