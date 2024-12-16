import Home from "./pages/home.jsx";
import Project from "./pages/project.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import NavBar from "./navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className={"main-div"}>
        <NavBar/>
        <section id="home"><Home/></section>
        <section id="project"><Project/></section>
        <section id="contact"><Contact/></section>
        <section id="about"><About/></section>
      </div>
    </>
  );
}

export default App;
