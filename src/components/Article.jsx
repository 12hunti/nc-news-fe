import { getArticle } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import { useParams } from "react-router";
import useApiRequest from "../hooks/useApiRequest";
import Comments from "./Comments";
import VoteButtons from "./VoteButtons";

function Article() {
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    error,
  } = useApiRequest(getArticle, "Failed to load the article", article_id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!article) {
    return <Loading />;
  }

  const { article_img_url, title, author, topic, votes, body } =
    article.article;

  return (
    <main>
      <section>
        <h2>{title}</h2>
        <img className="article-image" src={article_img_url} alt={title} />
        <div className="article-meta">
          <p>by {author}</p>
          <p>{topic}</p>
          <p className="votes">Votes: {votes}</p>
        </div>
        <p className="article-meta">
          {new Date(article.article.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <VoteButtons votes={votes}/>
        <br />
        <p className="article-body">{body}</p>
      </section>
      <section className="comment-list">
        <Comments />
      </section>
    </main>
  );
}

export default Article;
