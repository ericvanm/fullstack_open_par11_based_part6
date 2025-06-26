import { configureStore, combineReducers } from '@reduxjs/toolkit'

import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import notificationReducer from './notificationReducer'



const fullReducer = combineReducers({
    filter: filterReducer,
    anecdotes: anecdoteReducer,
    notification : notificationReducer,
  })

const store = configureStore({
    reducer: fullReducer
})



export default store