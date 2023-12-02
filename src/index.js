import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthToken from './contexts/AuthToken';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <AuthToken>
      <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter></Provider>
      </AuthToken>
    
  </React.StrictMode>
);


