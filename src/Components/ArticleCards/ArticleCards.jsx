import "./ArticleCards.css";

export default function ArticleCard({ img, title, description }) {
  return (
    <div className="article-cards">
      <img src={img} />
      <h2 className="card-title">{title}</h2>
    </div>
  );
}
