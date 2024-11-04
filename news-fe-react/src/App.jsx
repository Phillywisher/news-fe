import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import ArticleAllInfo from "./components/ArticleAllInfo";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="articles/:articleId" element={<ArticleAllInfo />} />
      </Routes>
    </>
  );
}

export default App;
