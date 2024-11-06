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

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchLikesCount = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: inc_votes })
    .then((res) => {
      return res.data;
    });
};

export const postComment = (article_id) => {
  return api.post(`/articles/${article_id}`, { body: comment }).then((res) => {
    return res.data;
  });
};
