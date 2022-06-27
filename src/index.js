import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from "./App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <App/>
   </Provider>
  </React.StrictMode>,
  
document.querySelector("#root")
  
);