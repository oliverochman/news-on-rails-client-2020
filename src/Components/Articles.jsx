import React, { Component } from "react";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [],
    singleArticle: null
  };

  componentDidMount = async () => {
    let response = await axios.get(`/articles`);
    this.setState({ articles: response.data.articles });
  };

  getSingleArticle = async (event) => {
    debugger;
    let id = event.target.parentElement.dataset.id;
    let response = await axios.get(`/articles/${id}`);
    this.setState({ singleArticle: response.data.article });
  };

  closeSingleArticle = () => {
    this.setState({
      singleArticle: null
    })
  }

  render() {
    let articles;
    if (this.state.singleArticle) {
      articles = (
        <div id={`article-${this.state.singleArticle.id}`}>
          <h1 id="title">{this.state.singleArticle.title}</h1>
          <h2 id="lead">{this.state.singleArticle.lead}</h2>
          <p id="content">{this.state.singleArticle.content}</p>
          <button id="button" onClick={this.closeSingleArticle}>Close article</button>
        </div>
      )
    } else {
      articles = (
        this.state.articles.map((article) => (
          <div id={`article-${article.id}`} key={article.id} data-id={article.id}>
            <h1 id="title">{article.title}</h1>
            <h2 id="lead">{article.lead}</h2>
            <button id="button" onClick={this.getSingleArticle}>Read more</button>
          </div>
        ))
      )
    }
    return (
      <div>
        {articles}

      </div>
    );
  }
}
export default Articles;
