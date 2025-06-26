import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const sortOnVotes= (a, b) => {

  return b.votes - a.votes  // sort on the nuimber of votes -  the order is first higher values
}


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdoteOf(state, action) {
      const id = action.payload

      // seach for the anecdote with the ID for increasing the vote
      const anecdoteToUpdate = state.find(a => a.id === id)
      console.log('anecdoteToUpdate', current(anecdoteToUpdate))
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }

      // Add the updated anecdote to the array
      const updatedAnecdotes = state.map(anecdote =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      )

      //return the updated array of Anecdotes in a sorted way (not use sort() to avoid the change of teh roiginal array)
      return updatedAnecdotes.toSorted(sortOnVotes)
    },

    appendAnecdote(state, action) {      
      state.push(action.payload)    
    },
    
    setAnecdotes(state, action) {
      return action.payload    
    }
  },
})

export const { voteAnecdoteOf, appendAnecdote, setAnecdotes } = anecdoteSlice.actions


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
} 

export const voteAnecdote = id => {
  return async dispatch => {
    const Anecdote = await anecdoteService.getById(id)
    const updatedAnecdote = {
      ...Anecdote,
      votes: Anecdote.votes + 1
    }
    await anecdoteService.update(id, updatedAnecdote)
    dispatch(voteAnecdoteOf(id))
  }
} 

export default anecdoteSlice.reducer
