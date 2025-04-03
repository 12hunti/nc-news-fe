import { getArticles } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import ArticleCard from "./ArticleCard";
import useApiRequest from "../hooks/useApiRequest";
import { useLocation, useSearchParams } from "react-router";

function AllArticles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topicSlug = queryParams.get("topic");
  const sortBy = searchParams.get("sortBy") || "created_at";
  const order = searchParams.get("order") || "desc";

  const {
    data: articles,
    isLoading,
    error,
  } = useApiRequest(
    getArticles,
    "Failed to load articles",
    topicSlug,
    sortBy,
    order
  );

  const handleSortChange = (newSortBy, newOrder) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      sortBy: newSortBy,
      order: newOrder,
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      <div className="sorting">
        <label>
          Sort By:
          <select
            value={sortBy}
            onChange={(event) => handleSortChange(event.target.value, order)}
          >
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>

        <label>
          {" "}
          Order:
          <select
            value={order}
            onChange={(event) => handleSortChange(sortBy, event.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <section className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}

export default AllArticles;
