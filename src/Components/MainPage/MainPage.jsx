import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ArticleCard from "../ArticleCards/ArticleCards";
import "./MainPage.css";

export default function MainPage({ articles, formatDate }) {
  const [articlesToDisplay, setArticlesToDisplay] = useState([]);
  const [formData, setFormData] = useState("");
  const articleCards = articlesToDisplay.map((article) => {
    return (
      <NavLink to={`/${article.id}`} key={article.id} className="links">
        <ArticleCard
          id={article.id}
          title={article.title}
          img={article.urlToImage}
          date={formatDate(article.publishedAt)}
        />
      </NavLink>
    );
  });

  useEffect(() => {
    setArticlesToDisplay(articles);
  }, [articles]);
  function handleChange(e) {
    setFormData(e.target.value);
    filterArticles(e.target.value);
  }

  function filterArticles(input) {
    const filteredArticles = articles.filter((article) =>
      article.description.toLowerCase().includes(input.toLowerCase())
    );
    if (formData === "") {
      setArticlesToDisplay(articles);
    } else {
      setArticlesToDisplay(filteredArticles);
    }
  }

  return (
    <div>
      <div>
        <form className="form">
          <label htmlFor="input" className="label">
            Search Articles By Keyword
          </label>
          <input
            className="input"
            type="text"
            name="input"
            placeholder="Enter a Keyword"
            value={formData}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="main-page">{articleCards}</div>
    </div>
  );
}
