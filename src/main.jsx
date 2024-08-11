import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IsLoggedInProvider } from './AuthContext/IsLoggedIn.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsLoggedInProvider>
      <App />
    </IsLoggedInProvider>
  </React.StrictMode>
);
