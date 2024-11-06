import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import ArticleAllInfo from "./components/ArticleAllInfo";
import "./index.css";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:articleId" element={<ArticleAllInfo />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
