import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query'
import { useReducer } from 'react'

import { getAnecdotes, updateAnecdote } from './requests'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return `anecdote '${action.payload}' voted`
    case "CREATE":
      return `anecdote '${action.payload}' created`
    case "ERROR":
    return `error: '${action.payload}'`
    case "RESET":
      return ""
    default:
      return state
  }
}


const App = () => {

  const queryClient = useQueryClient();
  const [notification, notificationDispatch] = useReducer(notificationReducer, "")


  const updateAnecdoteMutation = useMutation({ 
      mutationFn: updateAnecdote,
      onSuccess: () => {      
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })    
      } 
    })

  const handleVote = (anecdote) => {
    console.log('vote', anecdote)
    // increment the number of vote in a new updated anecdote object 
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    //console.log('updatedAnecdote', updatedAnecdote)
    // request the update of the anecdote
    updateAnecdoteMutation.mutate(updatedAnecdote )
    notificationDispatch({ type: "VOTE", payload: updatedAnecdote.content })
    setTimeout(() => {
      notificationDispatch({ type: "RESET" })
    }, 5000)
  }

  
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  })

  console.log(JSON.parse(JSON.stringify(result)))


  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  if ( result.isError ) {
    return <div>anecdote service not available due to problems in server</div>
  }
  

  const anecdotes = result.data
  

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification message={notification} />
      <AnecdoteForm notifyMessage={notificationDispatch}/>
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
