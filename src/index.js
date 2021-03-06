import React from 'react';
import ReactDOM from 'react-dom';
import './components/common/css/reset.scss'
import App from './App';
import {Provider} from 'react-redux';
import configStore from "./store/configStore";

// import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';


const store =  configStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
