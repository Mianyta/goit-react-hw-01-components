import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(<App />);
}

renderApp();
