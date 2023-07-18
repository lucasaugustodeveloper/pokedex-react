import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'
import { pokeApi } from './services/pokemon'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(pokeApi.middleware)
})

export default store
