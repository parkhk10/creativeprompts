import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

import * as postActions from './actions/postActions';

import './App.css';

import GridPostContainer from './components/gridpost-container';
import HeaderComponent from './components/header-component';
import MainContainer from './components/main-container';


class App extends Component {
//TODO: later- change the time into a module that automatically updates
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <br />
        <br />
        <MainContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postStore: state.postReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
