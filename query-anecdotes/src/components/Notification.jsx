const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (props.message == "") return null

  return (
    <div style={style}>
      {props.message}
    </div>
  )
}

export default Notification
