import { useEffect } from "react"

export default function ArticleDetail ({singleArticle}) {
    const {urlToImage, title, author, content, description, publishedAt} = singleArticle
    function formatDate(dateToFormat) {
        const [date] = dateToFormat.split('T')
        const [year, month, day] = date.split('-')
        const formattedDate = `${month}/${day}/${year}`
        return formattedDate
    }
   useEffect(() => {
    formatDate(publishedAt)
   }, [])
    return (
        <div className="article-detail">
            <h1>{title}</h1>
            <img src={urlToImage} className="article-detail-img"/>
            <p>{author}</p>
            <p>{content}</p>
            <p>{description}</p>
            <p>Date Published: {publishedAt.split('T')}</p>
        </div>
    )
}