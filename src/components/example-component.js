import React, { Component } from 'react';

class ExampleComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var exampleNum = this.props.useThisToPassDataBetweenComponentsExample;
		return (
			<div class="example-component">
				<p>Hi, I am example component number {exampleNum}</p>
			</div>
		);
	}
}

export default ExampleComponent;