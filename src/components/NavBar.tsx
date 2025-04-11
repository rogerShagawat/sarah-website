import { Link } from "react-router-dom";
import { NavItem } from "../types";

interface NavBarProps {
  branding: NavItem;
  pages: NavItem[];
}

const NavBar = ({ branding, pages }: NavBarProps) => {
  return (
    // <div className="container">
    <nav className="navbar-expand-sm bg-body-tertiary fs-5">
      {/* <div className="container-fluid"> */}
      <div className="navbar" id="navbarSupportedContent">
        {/* <a className="navbar-brand" href="/">
          {branding.displayName}
        </a> */}
        <Link className="navbar-brand" to="/">
          {branding.displayName}
        </Link>
        <ul className="navbar-nav me-auto mb-1 mb-lg-0">
          {pages.map(({ displayName, link = "/" }, index) => (
            <li className="nav-item" key={index}>
              {/* <a className="nav-link active" aria-current="page" href={link}>
                {displayName}
              </a> */}
              <Link className="nav-link active" aria-current="page" to={link}>
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </nav>
    // </div>
  );
};

export default NavBar;
