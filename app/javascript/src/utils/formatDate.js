function FormatDate(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let newDate = new Date(date)

  newDate = newDate.getDate() + ' ' + months[newDate.getMonth()] + ' ' + newDate.getFullYear()+ ' at ' + newDate.toLocaleTimeString('en-US', ([], { hour: '2-digit', minute: '2-digit' }))

  return newDate
}

export default FormatDate