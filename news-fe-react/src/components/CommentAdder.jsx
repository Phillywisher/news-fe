import { useState } from "react";
import { postComment } from "../api";

const CommentAdder = ({ addComment }) => {
  const [userComment, setUserComment] = useState("");
  const [error, setError] = useState(null);

  return (
    <form
      className="comment-adder"
      onSubmit={(e) => {
        e.preventDefault();
        postComment(userComment)
          .then(({ body: { comment } }) => {
            addComment(comment);
          })
          .catch((err) => {
            console.log(err);
          });
        setUserComment("");
      }}
    >
      <label htmlFor="new-comment">Feel free to comment!</label>
      <div className="comment-input">
        <input
          id="new-comment"
          type="text"
          value={userComment}
          onChange={({ target: { value } }) => {
            setUserComment(value);
          }}
        />
      </div>
      <button disabled={error !== null}>
        {error === null ? "comment" : "cannot post right now"}
      </button>
    </form>
  );
};

export default CommentAdder;
