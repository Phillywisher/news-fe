import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ArticleList from "./ArticleList";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <h1 className="page-heading">Home</h1>
      </div>
      <ArticleList />
    </>
  );
};
export default Home;
