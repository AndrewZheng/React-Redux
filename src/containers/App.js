import React, {Component} from 'react';
import {fetchPosts} from '../actions/posts';
import {connect} from 'react-redux';
import ArticleBlock from '../components/ArticleBlock'

class App extends Component{
	componentWillMount(){
        this.props.fetchPosts();
	}
	render(){
		if(!this.props.articles){
			return(<div>Loading....</div>);
		}
		
		return (
			<div>{
				this.props.articles.map((article)=>{
                   return (<ArticleBlock key={article.id} article={article} />);
				})
			}</div>
		);
	}
}

export default connect(
     (state)=>
    {return ({ articles: state.posts.all.data 
           })},
        {fetchPosts})(App);