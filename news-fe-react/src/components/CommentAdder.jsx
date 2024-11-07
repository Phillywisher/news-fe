import { useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const CommentAdder = ({ article_id, comments, addComment }) => {
  const [userComment, setUserComment] = useState("");
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    postComment(article_id, userComment, user.username).then((res) => {
      console.log(res);
      addComment(res);
      setUserComment("");
    });
    // .catch((err) => {
    //   setError("Failed to post comment. Please try again.");
    // });
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="new-comment">Feel free to comment!</label>
      <div className="comment-input">
        <input
          id="new-comment"
          type="text"
          value={userComment}
          onChange={({ target: { value } }) => setUserComment(value)}
        />
      </div>
      <button disabled={error !== null}>
        {error === null ? "Post Comment" : "Cannot post right now"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default CommentAdder;
