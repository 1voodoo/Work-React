import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

