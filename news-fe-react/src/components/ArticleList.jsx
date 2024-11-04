import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {
  console.log(props);
  const [items, setItems] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <h1>here are all the articles</h1>
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </>
  );
};
export default ArticleList;
