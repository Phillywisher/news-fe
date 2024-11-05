import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { getCommentByArticleId } from "../api";
import { CommentCard } from "./CommentCard";
import { Voter } from "./Voter";
const ArticleAllInfo = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState("");
  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
        setVotes(data.votes);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [articleId]);

  useEffect(() => {
    getCommentByArticleId(articleId).then((data) => {
      setComments(data);
    });
  }, [articleId]);

  // useEffect(() => {
  //   getLikesCount(articleId, votes)
  //     .then((data) => {
  //       setVotes(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, [articleId]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-xl text-gray-200 mb-4">Topic: {article.topic}</h2>
        <p className="text-sm text-gray-300">Made on:{article.created_at}</p>
        <p className="text-sm text-gray-40">Author: {article.author}</p>
        <img src={article.article_img_url} className="mt-4 rounded-lg" />
        <p className="text-sm text-gray-400">Votes: {votes}</p>
        <p className="text-sm text-gray-400">
          Comments: {article.comment_count}
        </p>
      </div>
      <ul className="flex flex-col gap-5 p-3">
        {comments.map((comment, index) => (
          <li key={index}>
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
      <Voter votes={votes} setVotes={setVotes} article_id={articleId} />
    </>
  );
};

export default ArticleAllInfo;
