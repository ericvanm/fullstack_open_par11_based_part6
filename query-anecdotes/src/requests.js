import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
    axios.get(baseUrl).then(res => res.data)

export const createAnecdote = newAnecdote =>  
    axios.post(baseUrl, newAnecdote).then(res => res.data)

export const updateAnecdote = updatedAnecdoteObj => { 
    console.log("content", `${updatedAnecdoteObj.content}`);
    return axios
        .put(`${baseUrl}/${updatedAnecdoteObj.id}`, updatedAnecdoteObj)
        .then(res => res.data)
        .catch(error => {
            console.log('Error updating anecdote:', error);
            throw error; 
        });
    }
