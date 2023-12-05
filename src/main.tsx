import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='itgoon'><Router/></BrowserRouter>
  </React.StrictMode>,

  // document.getElementById('root');
)
