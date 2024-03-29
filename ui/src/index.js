import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-ztxdnjlozz3dujtj.us.auth0.com"
    clientId="5hq9sWpU46CsWQMAKaTWqePSXKbX0XUI"
    redirectUri={window.location.origin}
  >
 <Provider store={store}>
  <Router>
  <App />
  </Router>

  </Provider>
  </Auth0Provider>,
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
