import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <div className="main-container nav-con">
        <Navbar />
      </div>
      <section className="main-container">
        <h1 className="title"></h1>
      </section>
    </>
  );
};

export default Header;
