import { NavItem } from "../types";

interface NavBarProps {
  branding: NavItem;
  pages: NavItem[];
}

const NavBar = ({ branding, pages }: NavBarProps) => {
  return (
    // <div className="container">
    <nav className="navbar-expand-sm bg-body-tertiary">
      {/* <div className="container-fluid"> */}
      <div className="navbar" id="navbarSupportedContent">
        <a className="navbar-brand" href="/">
          {branding.displayName}
        </a>
        <ul className="navbar-nav me-auto mb-1 mb-lg-0">
          {pages.map(({ displayName, link }, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link active" aria-current="page" href={link}>
                {displayName}
              </a>
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
