import React, { Component } from "react";
import axios from "axios";
import ArticleContent from './ArticleContent'

class Articles extends Component {
  state = {
    articles: [],
    singleArticle: null,
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.history.location.pathname !== prevProps.location.pathname) {
      this.setState({ singleArticle: null })
      this.getArticles()
    }
  }

  componentDidMount = () => {
    this.getArticles()
  };

  getArticles = async () => {
    let response
    if (this.props.history.location.pathname === "/") {
      response = await axios.get(`/articles`);
    } else {
      response = await axios.get(`/articles`,
        {
          params: this.props.match.params
        }
      );
    }
    this.setState({ articles: response.data.articles });
  }

  getSingleArticle = async (event) => {
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
        <ArticleContent
          article={this.state.singleArticle}
          singleArticle={true}
          closeSingleArticle={this.closeSingleArticle}
        />
      )
    } else {
      articles = (
        this.state.articles.map((article) => (
          <ArticleContent
            article={article}
            singleArticle={false}
            getSingleArticle={this.getSingleArticle}
          />
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