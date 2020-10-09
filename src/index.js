import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom";


let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://api-el-gaucho-nyheter.herokuapp.com/";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
