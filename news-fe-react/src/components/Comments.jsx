import { useEffect, useState } from "react";
import { getCommentByArticleId } from "../api";
import CommentAdder from "./CommentAdder";
import { CommentCard } from "./CommentCard";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCommentDelete = (deletedCommentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
    );
  };
  const fetchComments = () => {
    setIsLoading(true);
    getCommentByArticleId(article_id)
      .then((commentsFromApi) => {
        console.log(commentsFromApi);
        setComments(commentsFromApi);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
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
      <CommentAdder addComment={addComment} article_id={article_id} />
      <h3>Comments</h3>
      {isLoading ? (
        <p>...Loading Please Wait</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              onDelete={handleCommentDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
