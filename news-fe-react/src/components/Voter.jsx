import { useState } from "react";
import { patchLikesCount } from "../api";

export const Voter = ({ votes, setVotes, article_id }) => {
  const [count, setCount] = useState(votes);
  const [voted, setVoted] = useState(false);
  const incrementCount = (increment) => {
    if (voted) {
      return;
    }
    setVotes((votes) => {
      const newVote = votes + increment;
      setCount(newVote);
      return newVote;
    });
    patchLikesCount(article_id, increment);
    setVoted(true);
  };

  return (
    <div>
      {!voted ? (
        <>
          <button onClick={() => incrementCount(1)}>Up vote</button>
          <button onClick={() => incrementCount(-1)}>Down vote</button>
        </>
      ) : (
        <p>Thanks for voting!</p>
      )}
    </div>
  );
};
