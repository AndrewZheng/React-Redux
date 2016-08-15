import React, {Component} from 'react';
import {fetchPosts} from '../actions/posts.js';
import {connect} from 'react-redux';

class App extends Component{
	componentWillMount(){
        this.props.fetchPosts();
	}
	render(){
		if(!this.props.articles){
			return(<div>Loading....</div>);
		}
		console.log(this.props.articles);
		return (
			<div>Hello React!</div>
		);
	}
}

function mapStateToPros(state){
   return {articles:state.posts.all};
}

export default connect({mapStateToPros},{fetchPosts})(App);