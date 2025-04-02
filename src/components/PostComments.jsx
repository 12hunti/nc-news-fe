import { useParams } from "react-router";
import Collapsible from "./Collapsible";
import { postComment } from "../api";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

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
      .then((newComment) => {
        setCommentBody("");
        setSuccessMsg("Your comment has been posted!");
        onNewComment(newComment);
      })
      .catch((err) => {
        setError("Failed to post your comment. Please try again.");
        //give option to add a comment if the error shows
      })
      .finally(() => {
        setIsPosting(false);
      });
  };

  if (isPosting) {
    return <Loading />;
  }

//   if (error) {
//     return <Error error={error} />;
//   }

  return (
    <div>
      <Collapsible showContent="+ Add a Comment" hideContent="X">
        <form onSubmit={handleSubmit}>
          <label htmlFor="body">
            <img
              className="small-avatar"
              src="https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
              alt="user avatar Mr Jelly"
            />
          </label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Write your comment here..."
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </Collapsible>
      {error && <p className="error">{error}</p>}
      {successMsg && <p className="success">{successMsg}</p>}
      
    </div>
  );
}

export default PostAComment;
