import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleCard from "./ArticleCard";

const ArticleAllInfo = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [error, setError] = useState(null);
  console.log(articleId);
  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [articleId]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <ArticleCard article={article} />
      <div className="max-w-2xl mx-auto p-4">
        {/* <h2 className="text-xl text-gray-700 mb-4">Topic: {article.topic}</h2> */}
        {/* <p className="text-sm text-gray-500">Made on:{article.created_at}</p> */}
        <p className="text-sm text-gray-500">Author: {article.author}</p>
        <img src={article.article_img_url} className="mt-4 rounded-lg" />
        {/* <p className="text-sm text-gray-500">Votes: {article.votes}</p> */}
        <p className="text-sm text-gray-500">
          Comments: {article.comment_count}
        </p>
      </div>
    </>
  );
};

export default ArticleAllInfo;
