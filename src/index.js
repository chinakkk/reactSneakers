import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router} from 'react-router-dom';
import './index.scss';
import App from './App';
import 'macro-css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);
//
// ,
// {
//     "name": "Мужские Кроссовки abibas none name",
//     "price": "1999",
//     "src": "./img/sneakers/5.jpg"
// },
// {
//     "name": "Мужские Кроссовки Puma Like dd",
//     "price": "1999",
//     "src": "./img/sneakers/6.jpg"
// },
// {
//     "name": "Мужские Кроссовки Puma Like S102",
//     "price": "1999",
//     "src": "./img/sneakers/7.jpg"
// },
// {
//     "name": "Мужские Кроссовки Xiaomi",
//     "price": "1999",
//     "src": "./img/sneakers/8.jpg"
// }
