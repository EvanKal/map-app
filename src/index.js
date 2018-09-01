import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// function regSW() {
// if (!navigator.serviceWorker) return;
// if (navigator.serviceWorker) {
// navigator.serviceWorker.register('/sw.js')
// .then(function() { console.log("Service Worker Registered!"); });
// };
// }
//
// regSW();
