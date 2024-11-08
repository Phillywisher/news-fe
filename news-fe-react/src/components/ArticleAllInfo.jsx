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
        setError(error.msg);
      });
  }, [article_id]);

  return (
    <>
      <div className="main-container inner-post">
        <h1 className="page-heading">{article.title}</h1>
        <div className="">
          <h2 className="">Topic: {article.topic}</h2>
          <p className="">Created on: {article.created_at}</p>
          <p className="">Author: {article.author}</p>
          <img className="post-image" src={article.article_img_url} />
          <p className="">Votes: {votes}</p>
          <p className="">Comments: {article.comment_count}</p>
          <p className="">{article.body}</p>
        </div>
        <ul className="">
          <Comments article_id={article_id} />
        </ul>
        <Voter votes={votes} setVotes={setVotes} article_id={article_id} />
      </div>
    </>
  );
};

export default ArticleAllInfo;
