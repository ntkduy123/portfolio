export const formatDate = (dateTime) => {
  const date = new Date(dateTime)
  const day = date.getDate()
  const month = date.toLocaleString('en-us', { month: 'short' })
  const year = date.getFullYear()

  return `${day} / ${month} / ${year}`
}