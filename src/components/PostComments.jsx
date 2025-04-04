import { useParams } from "react-router";
import Collapsible from "./Collapsible";
import { postComment } from "../api";
import { useState } from "react";
import Loading from "./Loading";

function PostAComment({ onNewComment }) {
  const { article_id } = useParams();
  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setIsPosting(true);
    setSuccessMsg("");

    postComment(article_id, "jessjelly", commentBody)
      .then(({newComment}) => {
        setCommentBody("");
        setSuccessMsg("Your comment has been posted!");
        onNewComment(newComment);
      })
      .catch((err) => {
        setError("Failed to post your comment. Please try again.");
      })
      .finally(() => {
        setIsPosting(false);
      });
  };

  if (isPosting) {
    return <Loading />;
  }

  return (
    <div>
      <Collapsible showContent="+ Add a Comment" hideContent="X">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="body" className="label">
            <img
              className="small-avatar"
              src="https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
              alt="user avatar Mr Jelly"
            />
          </label>
          <textarea
            id="body"
            name="body"
            placeholder="Write your comment here..."
            value={commentBody}
            className="input"
            onChange={(event) => setCommentBody(event.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </Collapsible>
      {error && <p className="error">{error}</p>}
      {successMsg && <p className="success">{successMsg}</p>}
    </div>
  );
}

export default PostAComment;
