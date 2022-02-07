import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'typeface-montserrat';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './utils/apollo/apolloClient';
import { AuthProvider } from './utils/context/auth';
import { StateProvider } from './utils/context/state';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router>
      <AuthProvider>
        <StateProvider>
          <App />
        </StateProvider>
      </AuthProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
