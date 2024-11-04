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
