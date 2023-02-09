import { Link, NavLink } from "react-router-dom";

function TopBar() {
  return (
    // <h1>Top Bar</h1>
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Reddit
        </Link>
        <ul className="navbar-nav flex-row pull-xs-right">
          <li className="nav-item">
            <NavLink
              to="https://www.reddit.com/api/v1/authorize?client_id=uAmIbE9Ka4vcgm5Etmrrng&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
              className="nav-link"
              exact
            >
              reg
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopBar;
