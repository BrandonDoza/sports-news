export default function ArticleCard({id, img, description}) {
    return (
        <div className="article-cards">
            <img src={img}/>
            <h1>{description}</h1>
        </div>
    )
}