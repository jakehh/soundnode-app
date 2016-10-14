import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import AppRouter from './App/router';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory} routes={AppRouter} />,
  document.getElementById('app-root')
);
