import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
    <li>
      <img
        className="article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <h3>{article.title}</h3>
      <p>by {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
    </li>
    </Link>
  );
}

export default ArticleCard;
