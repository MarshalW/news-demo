'use strict';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

let count=1;
let reducers=function(state={message:'no message'},action){
	count++;
	return {message:'message_'+count};
};
let store=createStore(reducers);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
