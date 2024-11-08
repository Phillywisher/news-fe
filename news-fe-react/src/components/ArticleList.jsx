import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  const handleSortChange = (newSortBy, newOrder) => {
    setSearchParams({ topic, sort_by: newSortBy, order: newOrder });
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles({ topic, sort_by: sortBy, order: order })
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

  return (
    <section className="article-list">
      <div className="sort-controls">
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value, order)}
        >
          <option value="created_at">Sort by Date</option>
          <option value="comment_count">Sort by Comment Count</option>
          <option value="votes">Sort by Votes</option>
        </select>

        <button
          onClick={() =>
            handleSortChange(sortBy, order === "asc" ? "desc" : "asc")
          }
        >
          {order === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>

      <h1>{topic ? `Articles on ${topic}` : "Articles"}</h1>

      {isLoading ? (
        <p>Loading articles...</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ArticleList;
