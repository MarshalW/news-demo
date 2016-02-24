'use strict';
import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import request from 'superagent';
import App from './App';

const news=[
	{
		id:'a1',
		title:'沪指震荡收跌0.8%，险守2900点'
	},
	{
		id:'b1',
		title:'上海中心城区中小户型不得低于七成'
	},
	{
		id:'a14',
		title:'德国加入俄罗斯高铁争夺 中俄莫喀高铁合作出现变数'
	},
	{
		id:'ab1',
		title:'多家上市公司发布退市预警 净利润亏损成主因'
	}
];

let reducers=function(state={news:[]},action){
	console.log('>>>reducers:'+action);
	if(action.type=='refreshNewsList'){
		return {news:news};	
	}else{
		return state;
	}
};

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);
let store=createStoreWithMiddleware(reducers);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

request
  .get('/news.json')
  .set('Accept', 'application/json')
  .end(function(err, res){
    console.log('err: '+err);
    console.log(res);
  });
