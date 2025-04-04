import { useState } from "react";
import { patchItem } from "../api";
import Error from "./Error";

function VoteButtons({ itemType, votes, item_id }) {
  const [vote, setVote] = useState(votes || 0);
  const [error, setError] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = (voteChange) => {
    setVote((currentVotes) => currentVotes + voteChange);
    setError(null);
    setIsVoting(true);
    patchItem(itemType, item_id, voteChange)
      .catch((err) => {
        setVote((currentVotes) => currentVotes - voteChange);
        setError("Your vote was not successful. Please try again.");
      })
      .finally(() => {
        setIsVoting(false);
      });
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="votes-meta">
      <p className="votes">Votes: {vote}</p>
      {error ? <p>{error}</p> : null}
      <div className="vote-button-container">
        <button
          type="button"
          className="vote-button"
          onClick={() => handleVote(1)}
        >
          <img
            className="button-img"
            src="../../src/assets/upArrow.png"
            alt="up Arrow"
          />
        </button>
        <button
          type="button"
          className="vote-button"
          onClick={() => handleVote(-1)}
        >
          <img
            className="button-img"
            src="../../src/assets/downArrow.png"
            alt="up Arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default VoteButtons;
