import React from 'react'
import ReactDOM from 'react-dom'
// import {BrowserRouter} from 'react-router-dom'
import App from './App'
// import Axios from './Axios';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App/>,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

