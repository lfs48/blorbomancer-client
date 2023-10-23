import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureAppStore } from './store';

async function initializeApp() {

  const preloadedState = {};
  const store = configureAppStore(preloadedState);

  const container = document.getElementById('root') || document.body;
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  )
}

document.addEventListener("DOMContentLoaded", initializeApp);
