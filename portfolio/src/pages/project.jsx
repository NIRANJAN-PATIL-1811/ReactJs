import ProjectPageComponent from "../page_component/project_page_component";
import "./project.css";
import image from "./driver.jpg";
import old from "./old.jpg";
import money from "./money.jpg";
import shopping from "./shopping.jpg";
import connect from "./connect.jpg";

function Project(){
  return (
    <>
      <div className={'project-div'}>
        <ProjectPageComponent image={image} />
        <ProjectPageComponent image={old} />
        <ProjectPageComponent image={money} />
        <ProjectPageComponent image={shopping} />
        <ProjectPageComponent image={connect} />
      </div>
    </>
  );
}


export default Project;