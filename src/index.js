import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Main(props) {
    return<div>Main {props.name}</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <App />

    <Main  name="reac"/>
    </div>

);


