import { useState } from "react";
import { deleteComment } from "../api";

import Loading from "./Loading";

function DeleteComment({ comment_id, onDeleteComment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
 

  const handleDelete = (event) => {
    event.preventDefault();
    setIsDeleting(true);
    setError(null);

    deleteComment(comment_id)
      .then(() => {
        onDeleteComment(comment_id);
      })
      .catch((err) => {
        setError("Failed to delete your comment. Please try again.");
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  if (isDeleting) {
    return <Loading />;
  }

  return (
    <div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default DeleteComment;
