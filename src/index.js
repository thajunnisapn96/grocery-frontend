import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthToken from './contexts/AuthToken';
import ContextShare from './contexts/ContextShare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ContextShare>
      <AuthToken>
      <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter></Provider>
      </AuthToken>
      </ContextShare>
  </React.StrictMode>
);


