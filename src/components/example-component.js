import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as exampleActions from '../actions/exampleActions';
import * as actionTypes from '../actions/actionTypes'


class ExampleComponent extends Component {
	constructor(props) {
		super(props);
		this.addCountExampleInStore = this.addCountExampleInStore.bind(this);
	}

  addCountExampleInStore() {
  	console.log(this.props);
  	this.props.exampleActions.addCount(3);
  }

	render() {
		var exampleNum = this.props.useThisToPassDataBetweenComponentsExample;
		return (
			<div className="example-component">
				<p>Hi, I am example component number {exampleNum} and the example count from store is {this.props.countExample}</p>
				<button onClick={this.addCountExampleInStore}>click</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    countExample: state.exampleReducer
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