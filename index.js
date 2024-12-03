import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './index.css'; // You can add some CSS to style your app

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure this matches the id in popup.html
);
