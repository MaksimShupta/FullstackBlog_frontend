import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { CategoryProvider } from './context/CategoryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </Router>
  </React.StrictMode>,
) 