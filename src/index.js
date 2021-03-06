import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

let apiUrl
if (process.env.NODE_ENV === 'production' )  {
  apiUrl = 'https://news-on-rails-api.herokuapp.com/api/v1'
} else {
  apiUrl = 'http://localhost:3000/api/v1'
}
axios.defaults.baseURL = apiUrl

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
