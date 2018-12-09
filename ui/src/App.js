import "./style/main.scss";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './boot/configureStore';
import { BrowserRouter } from 'react-router-dom'

import Main from './containers/layouts/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
