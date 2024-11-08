import axios from "axios";
import { useParams } from "react-router-dom";

const api = axios.create({
  baseURL: "https://the-news-manc-times.onrender.com/api",
});
export const getArticles = ({
  topic,
  sort_by = "created_at",
  order = "desc",
}) => {
  let url = "/articles";
  const params = new URLSearchParams();

  if (topic) params.append("topic", topic);
  if (sort_by) params.append("sort_by", sort_by);
  if (order) params.append("order", order);

  if (params.toString()) {
    url = `${url}?${params.toString()}`;
  }
  return api.get(url).then(({ data }) => {
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

export const postComment = (article_id, comment, user) => {
  const commentData = { username: user, body: comment };
  return api
    .post(`/articles/${article_id}/comments`, commentData)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
