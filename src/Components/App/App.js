import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
// import allArticles from '../../mockData';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import { fetchArticles } from '../../apiCalls';

function App() {
  const [articles, setArticles] = useState([])
  function loadArticles() {
    fetchArticles()
    .then(data => {
      console.log(data, 'data')
      const fullArticlesWithIds = data.articles.filter((element) => {
        return element.description !== null && element.title !== "[Removed]"
      })
      .map((article, index) => {
        return {
          id: index + 1,
          ...article
        }
      })
      setArticles(fullArticlesWithIds)
    })
    
    
  }

  useEffect(() => {
    loadArticles()
  },[])

  console.log(articles, 'articles<><><><><')

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage articles={articles} />} />
        <Route path="/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
    </div>
  );
}

export default App;
