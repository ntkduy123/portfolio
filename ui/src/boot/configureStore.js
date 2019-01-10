import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from '../reducers'
import fetchMiddleware from '../middlewares/fetch'

const persistConfig = {
  key: 'primary',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const enhancer = compose(
  applyMiddleware(thunk, fetchMiddleware)
)

export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)
