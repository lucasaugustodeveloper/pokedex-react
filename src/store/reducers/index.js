import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from './counter'
import { pokeApi } from '../services/pokemon'

const rootReucer = combineReducers({
  counter: counterReducer,
  [pokeApi.reducerPath]: pokeApi.reducer,
})

export default rootReucer
