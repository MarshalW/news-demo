'use strict';
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import superagentPromisePlugin from 'superagent-promise-plugin';
import NewsBar from './NewsBar';
import NewsList from './NewsList';

function refreshNewsList(state){
  return {
    type:'refreshNewsList',
    state:state
  };
}

function loadingNewsList(state){
  return {
    type:'loadingNewsList',
    state:state
  };
}

function refreshNewsListAsync(){
  return (dispatch,getState)=>{
    let state=getState();
    dispatch(loadingNewsList(Object.assign({}, state, {
      loading:true,
      news:[]
    })));

    let delay=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },1000);
    });

    return delay.then(()=>{
      request
        .get('/news.json')
        .use(superagentPromisePlugin)
        .set('Accept', 'application/json')  
        .end()
        .then(function (res) {
           let result=JSON.parse(res.text);
           let newState=Object.assign({}, state, {
              news: result.news
           });
           dispatch(refreshNewsList(newState));
        })   
    });
  };
}

function select(state) {
  return {
    news: state.news,
    loading: state.loading
  };
}

class App extends Component {
  render(){
    const {dispatch,news,loading}=this.props;
    return (
        <div>
          <NewsBar loading={loading} onRefrashClick={()=>dispatch(refreshNewsListAsync())} />
          <NewsList news={news}/>
        </div>
    );
  }
}

export default connect(select)(App);




