import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducer';

import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyDvWx_ZRj7d_3hRcTmwuBohxqxVzYYOgGA",
    authDomain: "project-1-6bd09.firebaseapp.com",
    projectId: "project-1-6bd09",
    storageBucket: "project-1-6bd09.appspot.com",
    messagingSenderId: "291231708810",
    appId: "1:291231708810:web:531d0aeb4c1c9bece61f73",
    measurementId: "G-K05MW21J7Z"
  };
 firebase.initializeApp(firebaseConfig);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
<Provider store={store}>
    <App/>
    </Provider>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

