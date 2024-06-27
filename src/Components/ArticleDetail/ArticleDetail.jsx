import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"
import './ArticleDetail.css'

export default function ArticleDetail ({articles}) {
    const [singleArticle, setSingleArticle] = useState({})
    const {urlToImage, title, author, content, description, publishedAt} = singleArticle
    const id = useParams().id
    const correctId = parseFloat(id)

    function getSingleArticle(id) {
        const article = articles.find(article => article.id === id)
        console.log('art', article)
        return article
      }

useEffect(() => {
   const article = getSingleArticle(correctId)
    setSingleArticle(article)
}, [])

console.log('single', singleArticle)
console.log('id', typeof correctId)
console.log('artssss', articles)
    return (
        <div className="article-detail">
            <h1>{title}</h1>
            <img src={urlToImage} className="article-detail-img"/>
            <p>{author}</p>
            <p>{content}</p>
            <p>{description}</p>
            <p>Date Published: {publishedAt}</p>
            <NavLink to="/">
                <button>Home</button>
                </NavLink>
        </div>
    )
}