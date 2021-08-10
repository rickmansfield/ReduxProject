import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
const store = createStore(reducer);
console.log("STORE",store.getState());

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
//In index.js, make use of the createStore method and Provider component to link your App to redux.