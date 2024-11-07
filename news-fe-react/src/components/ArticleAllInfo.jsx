import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Voter } from "./Voter";
import { Comments } from "./Comments";

const ArticleAllInfo = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState("");
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState(0);
  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setVotes(data.votes || 0);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [article_id]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-xl text-gray-200 mb-4">Topic: {article.topic}</h2>
        <p className="text-sm text-gray-300">
          Created on: {article.created_at}
        </p>
        <p className="text-sm text-gray-40">Author: {article.author}</p>
        <img src={article.article_img_url} className="mt-4 rounded-lg" />
        <p className="text-sm text-gray-400">Votes: {votes}</p>
        <p className="text-sm text-gray-400">
          Comments: {article.comment_count}
        </p>
        <p className="article-body">{article.body}</p>
      </div>
      <ul className="flex flex-col gap-5 p-3">
        <Comments article_id={article_id} />
      </ul>
      <Voter votes={votes} setVotes={setVotes} article_id={article_id} />
    </>
  );
};

export default ArticleAllInfo;
