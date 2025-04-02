import { getComments } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import { useParams } from "react-router";
import useApiRequest from "../hooks/useApiRequest";
import Collapsible from "./Collapsible";
import VoteButtons from "./Votes";

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

  return (
    <div>
      <Collapsible showContent={"View Comments"} hideContent={"Hide Comments"}>
        <h3>Comments</h3>
        {comments.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p className="comment-body">{comment.body}</p>
              <div className="comment-meta">
                <p>by {comment.author}</p>
                <p>
                  {new Date(comment.created_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <VoteButtons itemType="comments" votes={comment.votes} item_id={comment.comment_id}/>
              </div>
            </li>
          );
        })}
      </Collapsible>
    </div>
  );
}

export default CommentCard;
