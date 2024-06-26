import { Link } from "react-router-dom";
import ArticleCard from "../ArticleCards/ArticleCards";
import './MainPage.css'

export default function MainPage({articles}) {
    const allArticleCards = articles.map((article) => {
        return (
            <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            img={article.urlToImage}
            description={article.description}
            />
        )
    })
     return (
        <div className="main-page">
            {allArticleCards}
        </div>
     )
}