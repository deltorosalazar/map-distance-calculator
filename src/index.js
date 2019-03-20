import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './App'
import 'leaflet/dist/leaflet.css';
import './styles.scss'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
)
