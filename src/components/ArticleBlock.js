import React, {Component} from 'react';
import {fetchPosts} from '../actions/posts';


 export default class ArticleBlock extends Component{
 
     render(){

         let article=this.props.article;
         if (!article){
             return (<div>Loading...</div>);
         }
          return (<div key={article.id}>
            <img className="author-avatar" src={article.author.avatar_url}/>
            {article.title}</div>);
     }
 }