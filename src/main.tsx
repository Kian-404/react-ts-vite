import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate, Provider} from "@redux-model/react";
import './index.css'
import App from './App'
import store from './redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
