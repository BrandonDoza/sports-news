import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import allArticles from '../../mockData';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

function App() {
  const [articles, setArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState({})
  function getArticles() {
    const articlesWithIds = allArticles.articles.map((article, index) => {
      return {
        id: index + 1,
        ...article
      }
    })
    setArticles(articlesWithIds)
  }

  function getSingleArticle(id) {
    const article = articles.find(article => article.id === id)
    console.log('art', article)
    setSingleArticle(article)
  }

  useEffect(() => {
    getArticles()
  },[])

  console.log(articles)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage articles={articles} getSingleArticle={getSingleArticle}/>} />
        <Route path="/:id" element={<ArticleDetail singleArticle={singleArticle} />} />
      </Routes>
    </div>
  );
}

export default App;
