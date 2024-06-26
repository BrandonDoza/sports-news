import { NavLink } from "react-router-dom";
import ArticleCard from "../ArticleCards/ArticleCards";
import './MainPage.css'

export default function MainPage({articles, getSingleArticle}) {
    const allArticleCards = articles.map((article) => {
        return (
            <NavLink to={`/${article.id}`} key={article.id} className="links">
            <ArticleCard
            id={article.id}
            title={article.title}
            img={article.urlToImage}
            description={article.description}
            />
            </NavLink>
        )
    })
     return (
        <div className="main-page">
            {allArticleCards}
        </div>
     )
}