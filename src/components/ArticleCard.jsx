function ArticleCard({ article }) {
//   console.log(article, "in ArticleCard");
  return (
    <li>
    <img className="article-image" src={article.article_img_url} alt={article.title} />
      <h3>{article.title}</h3>
      <p>by {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
    </li>
  );
}

export default ArticleCard;
