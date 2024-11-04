import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
function App() {
  return (
    <>
      <Header />
      <ArticleList />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
