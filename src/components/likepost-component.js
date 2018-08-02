import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from '../actions/postActions';
import { withRouter } from "react-router-dom";

class LikePostComponent extends Component {

	render() {
		return (
			<div className="row"> 
        <i className="far fa-heart"></i>
        <i className="far fa-bookmark"></i>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
      posts: state.postReducer
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
      )(LikePostComponent)
  );