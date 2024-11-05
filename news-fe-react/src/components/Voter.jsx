import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { patchLikesCount } from "../api";
import { useParams } from "react-router-dom";

export const Voter = ({ votes, setVotes, article_id }) => {
  const [count, setCount] = useState(0);
  const incrementCount = (increment) => {
    setVotes((votes) => {
      return votes + increment;
    });
    patchLikesCount(article_id, increment);
  };

  return (
    <div>
      <button onClick={() => incrementCount(1)}>Up vote</button>
      <button onClick={() => incrementCount(-1)}>Down vote</button>
    </div>
  );
};
