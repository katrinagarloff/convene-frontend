import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { reducer } from "./redux/reducers.js"
import { createStore } from "redux"
import { Provider } from "react-redux"

const theStore = createStore(reducer)

ReactDOM.render(
  <Provider store={theStore}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
