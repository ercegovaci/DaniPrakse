import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/mystyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

