import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './store'; //importing the store provider from store.js

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));


