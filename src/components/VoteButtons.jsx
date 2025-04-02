import { useState } from "react";

function VoteButtons({votes}) {
  const [vote, setVote] = useState(votes); 
  const upVote = () => {
    setVote((prevVote) => prevVote + 1);
  };

  const downVote = () => {
    setVote((prevVote) => prevVote - 1);
  };

  return (
    <div className="votes-meta">
      <p className="votes">Votes: {vote}</p>
      <div className="vote-button-container">
      <button type="button" className="vote-button" onClick={upVote}>
        <img
          className="button-img"
          src="../../src/assets/upArrow.png"
          alt="up Arrow"
        />
      </button>
      <button type="button" className="vote-button" onClick={downVote}>
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
