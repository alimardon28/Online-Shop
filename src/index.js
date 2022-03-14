import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider as LangProvider} from "./Context/langContext"


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <LangProvider>
        <App />
      </LangProvider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
