import "./project_page_component.css";
import { IoIosArrowForward } from "react-icons/io";

function ProjectPageComponent({ title, image, discription }){
  return (
    <>
      <div className="page-component">
        <div className="image-div">
          <img className={'image-tag'} src={image} alt="project-images"/>
        </div>

        <div className="button-1">
          <button type="button" class="btn btn-light">Know More <IoIosArrowForward/></button>
        </div>
      </div>
    </>
  );
}

export default ProjectPageComponent;