export const CommentCard = (props) => {
  const { comment } = props;
  return <p className="underline">{comment.body}</p>;
};
