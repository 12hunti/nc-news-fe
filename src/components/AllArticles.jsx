import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import ArticleCard from "./ArticleCard";

function AllArticles() {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
        setError({status:404, msg: 'Failed to load articles'});
      })
      .finally(() => {
        setIsLoading(false);
      });
  },[])

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="article-list">
      {/* <h2>Article List</h2> */}
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default AllArticles;
