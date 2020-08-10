import React, { Component } from 'react';
import axios from 'axios'

class LifestylePage extends Component{
  state = {
    articleCategory: []
  }

  componentDidMount = async () => {
    let response = await axios.get(`/articles`);
    this.setState({ articleCategory: response.data.articles })
  }

  render() {
    return (
      <div>
        <h1>Lifestyle</h1>

        {this.state.articleCategory.map(article => {
          if (article.category === 'lifestyle') {
            return (
              <div className='article-list'>
                <h1 id="">{article.title}</h1>
                <h2 id="">{article.lead}</h2>
                <button id="button">Read more</button>
              </div>
            )
          }
        })}
      </div>
    )

  }
}

export default LifestylePage;