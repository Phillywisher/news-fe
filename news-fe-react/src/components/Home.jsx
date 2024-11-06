import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ArticleList from "./ArticleList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ArticleList />
    </div>
  );
};
export default Home;
