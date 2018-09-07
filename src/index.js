import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { reducer } from "./redux/reducers.js"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'



const theStore = createStore(reducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={theStore}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
