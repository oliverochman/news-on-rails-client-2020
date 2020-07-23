import React, { Component } from 'react';
import axios from "axios"

class Articles extends Component {
    state = {
        articles: [],
    }

    componentDidMount = async () => {
        let response = await axios.get(`/articles`);
        this.setState({ articles: response.data.articles });
        
    };

  render() {


    
    return (
      <div 
      > 
   {this.state.articles.map(article => (
       
     <h1 id={`article-${article.id}`}
     key={article.id} 
     >{article.title}</h1>   
    ))}
     </div>
    );
  }
}
export default Articles;