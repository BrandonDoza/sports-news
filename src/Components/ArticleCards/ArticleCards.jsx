import "./ArticleCards.css";

export default function ArticleCard({ img, title, description }) {
  return (
    <div className="article-cards">
      <img src={img} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
