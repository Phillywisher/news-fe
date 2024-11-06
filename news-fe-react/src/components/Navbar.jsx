import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="main-navigation">
        <div className="logo">
          <img src="" />
        </div>
        <div className="nav">
          <nav className="nav-container">
            <ul>
              <li>{/* <Link to="/">Home</Link> */}</li>

              <li>
                <Link to="/articles?topic=coding">Coding</Link>
              </li>
              <li>
                <Link to="/articles?topic=cooking">Cooking</Link>
              </li>
              <li>
                <Link to="/articles?topic=football">Fooball</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
