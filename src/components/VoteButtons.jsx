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
    <div>
      <button type="button" className="vote-button" onClick={upVote}>
        <img
          className="button-img"
          src="../../src/assets/upArrow.png"
          alt="up Arrow"
        />
      </button>
      <p className="votes">Votes: {vote}</p>
      <button type="button" className="vote-button" onClick={downVote}>
        <img
          className="button-img"
          src="../../src/assets/downArrow.png"
          alt="up Arrow"
        />
      </button>
    </div>
  );
}

export default VoteButtons;
