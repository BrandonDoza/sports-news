import "./ArticleCards.css";

export default function ArticleCard({ img, title, date }) {
  return (
    <div className="article-cards">
      <img src={img} />
      <h2 className="card-title">{title}</h2>
      <p>{date}</p>
    </div>
  );
}
