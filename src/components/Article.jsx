import { getArticle, getComments } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import { Link, useParams } from "react-router";
import useApiRequest from "../hooks/useApiRequest";
import Comments from "./Comments";
import VoteButtons from "./Votes";
import PostAComment from "./PostComments";
import { useEffect, useState } from "react";

function Article() {
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    error,
  } = useApiRequest(getArticle, "Failed to load the article", article_id);

  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((data) => {
        setComments(data.comments);
      })
      .catch(() => {
        setComments([]);
      })
      .finally(() => {
        setIsLoadingComments(false);
      });
  }, [article_id]);

  const handleNewComment = (newComment) => {
    setComments((currentComments) => {
      return [newComment, ...currentComments];
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
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
         <Link to={"/topics"}><p>{topic}</p></Link> 
        </div>
        <p className="article-meta">
          {new Date(article.article.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <VoteButtons itemType="articles" votes={votes} item_id={article_id} />
        <br />
        <p className="article-body">{body}</p>
      </section>
      <section className="comment-list">
        <Comments comments={comments} setComments={setComments} />
      </section>
      <section>
        <PostAComment onNewComment={handleNewComment} />
      </section>
    </main>
  );
}

export default Article;
