import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './route';

var reactapp = document.createElement('div')
document.querySelector('body').appendChild(reactapp);
ReactDOM.render(
    <div><AppRoute /></div>,
    document.querySelector('#app')
)