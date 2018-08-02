import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

import * as postActions from './actions/postActions';

import './App.css';

import GridPostContainer from './components/gridpost-container';
import HeaderComponent from './components/header-component';
import MainContainer from './components/main-container';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
class App extends Component {

  componentDidUpdate() {
    //This handles smooth scrolling!
    let hash = this.props.location.hash.replace('#', '');
    if (hash) {
        let node = ReactDOM.findDOMNode(this.refs[hash]);
        if (node) {
            node.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }
}

  render() {
    return (
      <div className="App">
        <div ref='header'>
        <HeaderComponent />
        </div>
        <br />
        <br />
        <div ref='main'>
        <MainContainer />
        </div>
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
