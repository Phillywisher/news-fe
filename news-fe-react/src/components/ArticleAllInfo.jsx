import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { getCommentByArticleId } from "../api";
import { CommentCard } from "./CommentCard";
const ArticleAllInfo = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
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
  return (
    <>
      <h1>{article.title}</h1>
      <div>
        <h2>Topic: {article.topic}</h2>
        <p>Made on:{article.created_at}</p>
        <p>Author: {article.author}</p>
        <img src={article.article_img_url} />
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
      <ul className="itemCard">
        {comments.map((comment, index) => (
          <li key={index}>
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArticleAllInfo;
// className = "text-3xl font-bold mb-2";
// className = "max-w-2xl mx-auto p-4";
// className = "text-xl text-gray-700 mb-4";
// className = "text-sm text-gray-500";
// className = "text-sm text-gray-500";
// className = "mt-4 rounded-lg";
// className = "text-sm text-gray-500";
// className = "text-sm text-gray-500";
