import axios from "axios";
import ArticleContent from "./ArticleContent";
import React, { useRef, useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

const Articles = (props) => {

  const [articles, setArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState(null)
  const pathName = props.history.location.pathname
  const location = useSelector(state => state.location)

  useEffect(() => {
    getArticles()
  }, [])


  useEffect(() => {
      setSingleArticle(null);
      getArticles();
  }, [pathName])

  const getArticles = async () => {
    let response;
    if (props.history.location.pathname === "/") {
      response = await axios.get(`/articles`);
    } else if (pathName === 'local') {
      response = await axios.get(`/articles`, {
        params: {
          location: location
        }
      }); 
    } else {
      response = await axios.get(`/articles`, {
        params: props.match.params,
      });
    }
    setArticles(response.data.articles);
  };

  const getSingleArticle = async (event) => {
    let id = event.target.parentElement.dataset.id;
    let response = await axios.get(`/articles/${id}`);
    setSingleArticle(response.data.article);
  };

  const closeSingleArticle = () => {
    setSingleArticle(null);
  };

  let content;
  if (singleArticle) {
    content = (
      <ArticleContent
        article={singleArticle}
        singleArticle={true}
        closeSingleArticle={closeSingleArticle}
      />
    );
  } else {
    content = articles.map((article) => (
      <ArticleContent
        article={article}
        singleArticle={false}
        getSingleArticle={getSingleArticle}
      />
    ));
  }
  return <div>{content}</div>;

}

export default Articles

