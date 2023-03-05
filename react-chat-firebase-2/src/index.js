import React from 'react';
import ReactDOM from 'react-dom/client';

import { initializeApp } from "firebase/app";

import { BrowserRouter } from 'react-router-dom';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb5rO7-hBq0PJ3emVEwv1Uwz8K3Dtz7kk",
  authDomain: "react-chat-wi23a.firebaseapp.com",
  projectId: "react-chat-wi23a",
  storageBucket: "react-chat-wi23a.appspot.com",
  messagingSenderId: "716444400015",
  appId: "1:716444400015:web:a3c6f14042da5bf100f3fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);