import { getArticles } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../hooks/useApiRequest";

function AllArticles() {
  const { data: articles, isLoading, error } = useApiRequest(getArticles, "Failed to load articles");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}

export default AllArticles;
