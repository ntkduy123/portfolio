/* eslint-disable linebreak-style */
import './style/main.scss'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { PersistGate } from 'redux-persist/lib/integration/react'

import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store, persistor } from './boot/configureStore'
import Main from './containers/layouts/Main'
import LoginPage from './containers/pages/Login/LoginPage'

console.warn = () => {}

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={LoginPage} />
          <Main />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default App
