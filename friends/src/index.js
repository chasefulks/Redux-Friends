import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/reducers.js'
 const middleware = applyMiddleware(logger, thunk);
 const store = createStore(
    rootReducer,
    middleware
);
 ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
