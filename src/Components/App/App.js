import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import allArticles from '../../mockData';
import Header from '../Header/Header';

function App() {
  const [articles, setArticles] = useState([])
  function getArticles() {
    const articlesWithIds = allArticles.articles.map((article, index) => {
      return {
        id: index + 1,
        ...article
      }
    })
    setArticles(articlesWithIds)
  }
  useEffect(() => {
    getArticles()
  },[])
  console.log(articles)
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
