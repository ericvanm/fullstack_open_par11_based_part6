import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'

const AnecdoteForm = (props) => {
  const queryClient = useQueryClient()
  const notificationDispatch = props.notifyMessage // get the dispatch function from th props

  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote,
    onSuccess: () => {      
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })    
    }, 
    onError: (error) => {
      console.log('Error creating anecdote:', error)
      notificationDispatch({ type: "ERROR", payload: error.response.data.error })
      setTimeout(() => {
        notificationDispatch({ type: "RESET" })
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    console.log('new anecdote')
    notificationDispatch({ type: "CREATE", payload: content })
    setTimeout(() => {
      notificationDispatch({ type: "RESET" })
    }, 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
