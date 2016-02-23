'use strict';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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
	if(action.type!='refreshNewsList'){
		return state;
	}else{
		return {news:news};	
	}
};
let store=createStore(reducers);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
