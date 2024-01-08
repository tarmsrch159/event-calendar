import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider } from "primereact/api";
import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, types,Provider as AlertProvider } from 'react-alert';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  type: types.ERROR,
  offset: '30px',
  transitions: transitions.SCALE
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  ,
)
