/* eslint-disable linebreak-style */
import './style/main.scss'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './boot/configureStore'
import Main from './containers/layouts/Main'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default App
