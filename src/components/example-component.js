import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as exampleActions from '../actions/exampleActions';
import * as actionTypes from '../actions/actionTypes';


class ExampleComponent extends Component {
	constructor(props) {
		super(props);
		this.addCountExampleInStore = this.addCountExampleInStore.bind(this);
	}

	// componentWillMount() {
	// 	this.props.postActions.getPosts();
	// }

  addCountExampleInStore() {
  	this.props.exampleActions.addCount(3);
  }

	render() {
		var exampleNum = this.props.useThisToPassDataBetweenComponentsExample;
		var useDataFromStoreExample = this.props.posts;
		// console.log(useDataFromStoreExample);
		return (
			<div className="example-component">
				<p>Hi, I am example component number {exampleNum} and the example count from store is {this.props.countExample}</p>
				<p>Wow, isn{"'"}t this cool? Now we have integrated the content {"with"} the redux. </p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio blah blah blah blah blah</p>
				<button onClick={this.addCountExampleInStore}>click</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    countExample: state.exampleReducer,
    posts: state.postReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    exampleActions: bindActionCreators(exampleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
