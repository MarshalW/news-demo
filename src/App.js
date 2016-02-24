'use strict';
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import NewsBar from './NewsBar';
import NewsList from './NewsList';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function refreshNewsList(){
  return {
    type:'refreshNewsList'
  };
}

function refreshNewsListAsync(){
  return (dispatch,getState)=>{
    return setTimeout(()=>{
      dispatch(refreshNewsList());
    },100);    
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




