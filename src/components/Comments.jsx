import Collapsible from "./Collapsible";
import VoteButtons from "./Votes";
import DeleteComment from "./DeleteComment";
import { useState } from "react";

function Comments({ comments, setComments }) {
  const [successMsg, setSuccessMsg] = useState("");


  const handleDeleteComment = (commentID) => {
  
    setComments((currentComments) => {
      return currentComments
        .map((comment) => {
          if (comment.comment_id === commentID) {
            setSuccessMsg("Your comment was deleted.");
            return null;
          }
          return comment;
        })
        .filter((comment) => comment !== null);
    });

  };

  return (
    <div>
      <Collapsible showContent={"View Comments"} hideContent={"Hide Comments"}>
        <h3>Comments</h3>
        {successMsg && <p className="success">{successMsg}</p>}
        {comments.map((comment) => {
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
                <VoteButtons
                  itemType="comments"
                  votes={comment.votes}
                  item_id={comment.comment_id}
                />
              </div>
              {comment.author === "jessjelly" && (
                <DeleteComment
                  comment_id={comment.comment_id}
                  onDeleteComment={handleDeleteComment}
                />
              )}
            </li>
          );
        })}
      </Collapsible>
    </div>
  );
}

export default Comments;
