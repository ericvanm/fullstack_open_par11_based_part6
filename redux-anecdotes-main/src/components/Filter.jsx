import { useDispatch, useSelector  } from 'react-redux'
import { filterAnecdotesOf } from '../reducers/filterReducer'

const Filter = (props) => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      console.log(event.target.value)
      dispatch(filterAnecdotesOf(event.target.value))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter