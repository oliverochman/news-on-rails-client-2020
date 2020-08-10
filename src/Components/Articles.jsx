import React, { Component } from "react";
import axios from "axios";
import ArticleContent from './ArticleContent'
import CategoryHeader from './CategoryHeader'

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
        <CategoryHeader />
        {articles}
      </div>
    );
  }
}
export default Articles;