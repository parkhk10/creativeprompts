import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from '../actions/postActions';
import * as actionTypes from '../actions/actionTypes';

class GridPostComponent extends Component {

	render() {
		return (
			<div className="gridpost-component">
				<p>{this.props.post.title}</p>
				<p>{this.props.post.author}</p>
				<p>{this.props.post.contentText}</p>
				<img src={this.props.post.contentImage}
								style={{
										maxWidth: "300px",
										maxheight: "500px"}}/>

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridPostComponent);
