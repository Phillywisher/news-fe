import { useEffect, useState } from "react";
import { getCommentByArticleId } from "../api";
import CommentAdder from "./CommentAdder";
import { CommentCard } from "./CommentCard";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = () => {
    setIsLoading(true);
    getCommentByArticleId(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const addComment = (CommentToadd) => {
    setComments((currentComments) => {
      return [CommentToadd, ...currentComments];
    });
  };

  useEffect(() => {
    fetchComments();
  }, [article_id]);
  if (error) {
    return <p>Error</p>;
  }
  return (
    <section className="comments-section">
      <h3>Comments</h3>
      {isLoading ? (
        <p>...Loading Please Wait</p>
      ) : (
        <ul>
          {comments.map((comment, index) => {
            return <CommentCard key={index} comment={comment} />;
          })}
        </ul>
      )}
      <CommentAdder addComment={addComment} article_id={article_id} />
    </section>
  );
};
