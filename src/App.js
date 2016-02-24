'use strict';
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import NewsBar from './NewsBar';
import NewsList from './NewsList';

function refreshNewsList(news){
  return {
    type:'refreshNewsList',
    state:news
  };
}

function refreshNewsListAsync(){
  return (dispatch,getState)=>{
    return request
      .get('/news.json')
      .set('Accept', 'application/json')
      .end(function(err, res){
        let news=JSON.parse(res.text);
        dispatch(refreshNewsList(news));
    });    
  };
}

function select(state) {
  return {
    news: state.news
  };
}

class App extends Component {
  render(){
    const {dispatch,news}=this.props;
    return (
        <div>
          <NewsBar onRefrashClick={()=>dispatch(refreshNewsListAsync())} />
          <NewsList news={news}/>
        </div>
    );
  }
}

export default connect(select)(App);




