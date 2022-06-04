import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// IN ANY REACT PROJECT, YOU'RE GOING TO HAVE SOME FORM OF THIS BOILERPLATE CODE, WHICH HOOKS TO THE WEBPAGE
// STRICT MODE GIVES YOU ADDITIONAL WARNINGS AS YOU CODE.
// THIS BOILERPLATE "INJECTS" THE COMPONENTS TO RENDER INTO THAT DIV FROM INDEX.HTML
reportWebVitals();
