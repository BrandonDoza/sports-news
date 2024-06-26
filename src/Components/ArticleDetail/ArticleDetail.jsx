import { useParams } from "react-router-dom"

export default function ArticleDetail ({singleArticle}) {
    const {urlToImage, title, author, content, description, publishedAt} = singleArticle
    return (
        <div className="article-detail">
            <h1>{title}</h1>
            <img src={urlToImage} />
            <p>{author}</p>
            <p>{content}</p>
            <p>{description}</p>
            <p>{publishedAt}</p>
        </div>
    )
}