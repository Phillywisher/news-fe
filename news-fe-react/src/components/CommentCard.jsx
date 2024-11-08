import { useContext, useState } from "react";
import { deleteComment } from "../api";
import { UserContext } from "../context/UserContext";
export const CommentCard = (props) => {
  const { comment, onDelete } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const { user } = useContext(UserContext);
  const canDelete = user && user.username === comment.author;
  const handleDelete = () => {
    setIsDeleting(true);
    setDeleteError(null);

    deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleting(false);
        onDelete(comment.comment_id);
      })
      .catch((error) => {
        setIsDeleting(false);
        setDeleteError(error.msg);
      });
  };

  return (
    <section className="comment-card">
      <li className="border-b border-violet-200 py-4 px-6">
        <p className="text-violet-800 text-sm mb-2">{comment.body}</p>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-violet-500">Written by:</p>
          <p className="text-sm font-semibold text-blue-600">
            {comment.author}
          </p>
        </div>
        <div className="mt-1 text-xs text-violet-400">
          <p>Posted on: {new Date(comment.created_at).toLocaleString()}</p>
          <div className="delete-button">
            {canDelete ? (
              isDeleting ? (
                <button disabled>Deleting...</button>
              ) : (
                <button onClick={handleDelete}>Delete</button>
              )
            ) : (
              <p className="text-xs text-gray-400">
                You cannot delete this comment.
              </p>
            )}
          </div>
          {deleteError && <p className="error">{deleteError}</p>}
        </div>
      </li>
    </section>
  );
};
