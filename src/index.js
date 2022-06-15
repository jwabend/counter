//     obj        module
//importing the object from the module
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorking from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";


ReactDom.render(<Counters />, document.getElementById('root'));


