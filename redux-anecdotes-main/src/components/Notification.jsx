import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state =>state.notification.notification)
 
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10 // in order to get space below notification frame
  }
  // Avoid the display of the notification frame if no message to be displayed
  if (notification === "") {
    return null
  }
  else  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification