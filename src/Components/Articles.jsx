import React, { Component } from "react";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [],
  };

  componentDidMount = async () => {
    let response = await axios.get(`/articles`);
    this.setState({ articles: response.data.articles });
  };

  render() {
    return (
      <div>
        {this.state.articles.map((article) => (
          <div id={`article-${article.id}`} key={article.id}>
            <h1 id="title">{article.title}</h1>
            <h2 id="lead">{article.lead}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default Articles;
