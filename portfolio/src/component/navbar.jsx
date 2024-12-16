import { useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const MyNavigation = useNavigate();

  function navbar_fun(val) {
    if (val == "home") {
      MyNavigation("/");
    } else if (val == "project") {
      MyNavigation("/project");
    } else if (val == "contact") {
      MyNavigation("/contact");
    } else if (val == "about") {
      MyNavigation("/about");
    } else {
      MyNavigation("*");
    }
  }

  return (
    <>
      <div className="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="navbar-nav">
            <a className="nav-link" href="#" onClick={() => navbar_fun("home")}>
              Home
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => navbar_fun("project")}
            >
              Projects
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => navbar_fun("contact")}
            >
              Contact
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => navbar_fun("about")}
            >
              About
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
