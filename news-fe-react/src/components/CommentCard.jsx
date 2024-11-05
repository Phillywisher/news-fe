export const CommentCard = (props) => {
  const { comment } = props;
  return <p className="">{comment.body}</p>;
};
