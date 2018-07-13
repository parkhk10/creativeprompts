import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import * as postActions from '../actions/postActions';
import { Post } from '../models/post';
import './createpost-component.css';

class CreatePostComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			author: '',
			title: '',
			contentText: '',
		};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleContentTextChange = this.handleContentTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAuthorChange(event) {
		this.setState({
			author: event.target.value,
		});
	}

	handleTitleChange(event) {
		this.setState({
			title: event.target.value,
		});
	}

	handleContentTextChange(event) {
		this.setState({
			contentText: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.postActions.createPost(new Post(this.state.title, this.state.author, this.state.contentText));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<ul className="postForm">
						<li>
							<label>
								Your Name:
								<br />
								<input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
							</label>
						</li>
						<li>
							<label>
								Title:
								<br />
								<input type="text" value={this.state.title} onChange={this.handleTitleChange} />
							</label>
						</li>
						<li>
							<label>
								Write Here:
								<textarea rows="10" cols="50" value={this.state.contentText} onChange={this.handleContentTextChange} />
							</label>
						</li>
						<li>
							<input type="submit" value="Submit" />
						</li>
					</ul>
				</form>
			</div>
		)
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
	)(CreatePostComponent)
);