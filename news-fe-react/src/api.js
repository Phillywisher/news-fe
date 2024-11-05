import axios from "axios";
import { useParams } from "react-router-dom";

const api = axios.create({
  baseURL: "https://the-news-manc-times.onrender.com/api",
});
export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentByArticleId = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchLikesCount = (article_id, inc_votes) => {
  console.log(article_id, inc_votes);
  return api
    .patch(`/articles/${article_id}`, { inc_votes: inc_votes })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
