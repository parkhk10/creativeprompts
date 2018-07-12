import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import * as postActions from '../actions/postActions';
import StackGrid, { transitions, easings } from "react-stack-grid";

import GridPostComponent from './gridpost-component';

const { scaleDown } = transitions;

class GridPostContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
    this.props.postActions.getPostsFromDB();
  }

	render() {
		// TODO: get rid of i as key lol, but make sure key is unique
		var i = 0;
    var gridPosts = this.props.postStore.map(function(post) {
    	i++;
  		return <GridPostComponent post={post} key={i}/>
      
    })

    return (
    	<div className="postContainer">
    		<StackGrid
          columnWidth={375}
          gutterWidth={35}
          gutterHeight={35}
          duration={1000}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          //monitorImagesLoaded={true}
        >
       	{gridPosts}
        </StackGrid>
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
  )(GridPostContainer)
);
