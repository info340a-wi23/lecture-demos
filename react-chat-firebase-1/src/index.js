import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app"; //added from firebase

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChR-uCZQrXIuC8l0QGQynq6D6z43cRXN8",
  authDomain: "react-chat-firebase1-temp.firebaseapp.com",
  databaseURL: "https://react-chat-firebase1-temp-default-rtdb.firebaseio.com",
  projectId: "react-chat-firebase1-temp",
  storageBucket: "react-chat-firebase1-temp.appspot.com",
  messagingSenderId: "1052807428829",
  appId: "1:1052807428829:web:b155cb5ef576560cf47934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);