import "./navbar.css";

function NavBar() {
  return (
    <>
      <div className={"nav-div"}>
        <div className={"name-div"}>Niranjan Patil</div>
        <div className={"nav"}>
          <a className="navbar-brand" href="#home">
            Home
          </a>

          <a className="navbar-brand" href="#project">
            Projects
          </a>

          <a className="navbar-brand" href="#contact">
            Contact
          </a>

          <a className="navbar-brand" href="#about">
            About
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
