export const CommentCard = (props) => {
  const { comment } = props;
  return (
    <li className="border-b border-violet-200 py-4 px-6">
      <p className="text-violet-800 text-sm mb-2">{comment.body}</p>
      <div className="flex items-center space-x-2">
        <p className="text-sm text-violet-500">Written by:</p>
        <p className="text-sm font-semibold text-blue-600">{comment.author}</p>
      </div>
      <div className="mt-1 text-xs text-violet-400">
        <p>Posted on: {new Date(comment.created_at).toLocaleString()}</p>
      </div>
    </li>
  );
};
