import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from './actions/postActions';

import logo from './logo.svg';
import cactus from './logo.png';
import './App.css';

import GridPostContainer from './components/gridpost-container';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cactus} className="App-logo" alt="logo" />
          <h1 className="App-title">Succulents</h1>
        </header>
        <p className="App-intro">
          Welcome to Creative Prompts! Post your own response to the prompt above or find some inspiration from others{"'"} posts.
        </p>
        <br />
        <GridPostContainer posts={this.props.postStore} key={1}/>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
