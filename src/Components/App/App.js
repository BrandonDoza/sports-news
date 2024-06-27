import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
// import allArticles from '../../mockData'; //mock data
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import { fetchArticles } from "../../apiCalls";

function App() {
  const [articles, setArticles] = useState([]);
  function loadArticles() {
    fetchArticles().then((data) => {
      const fullArticlesWithIds = data.articles
        .filter((element) => {
          return element.description !== null && element.title !== "[Removed]";
        })
        .map((article, index) => {
          return {
            id: index + 1,
            ...article,
          };
        });
      setArticles(fullArticlesWithIds);
    });
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage articles={articles} formatDate={formatDate} />} />
        <Route path="/:id" element={<ArticleDetail articles={articles} formatDate={formatDate} />} />
      </Routes>
    </div>
  );
}

export default App;
