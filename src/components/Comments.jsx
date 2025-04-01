import { getComments } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import { useParams } from "react-router";
import useApiRequest from "../hooks/useApiRequest";
import Collapsible from "./Collapsible";

function CommentCard() {
  const { article_id } = useParams();

  const {
    data: comments,
    isLoading,
    error,
  } = useApiRequest(getComments, "Failed to load comments", article_id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!comments) {
    return <Loading />;
  }

  return (
    <div>
        <Collapsible contentDescriptor={'Comments'}>
      <h3>Comments</h3>
      {comments.comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>by {comment.author}</p>
            <p>Votes {comment.votes}</p>
            <p>
              {new Date(comment.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </li>
        );
      })}
      </Collapsible>
    </div>
  );
}

export default CommentCard;
