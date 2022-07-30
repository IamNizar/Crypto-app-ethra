
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { TransactionsProvider } from './context/TransactionContext';
import App from './App';
import store from './app/store';

import 'antd/dist/antd.css';

ReactDOM.render(
  
  <React.StrictMode>
    <TransactionsProvider>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    </TransactionsProvider>
  </React.StrictMode>
  ,
  document.getElementById('root'),
);

