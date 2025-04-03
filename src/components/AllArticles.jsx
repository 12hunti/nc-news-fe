import { getArticles } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../hooks/useApiRequest";
import { useLocation } from "react-router";

function AllArticles() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topicSlug = queryParams.get("topic");

  const {
    data: articles,
    isLoading,
    error,
  } = useApiRequest(getArticles, "Failed to load articles", topicSlug);

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
