import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getArticles().then((articles) => {
      const filteredArticles = topic
        ? articles.filter((article) => article.topic === topic)
        : articles;
      setArticles(filteredArticles);
    });
  }, [topic]);

  return (
    <>
      <h1>{topic}</h1>
      <ul>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ul>
    </>
  );
};

export default ArticleList;
