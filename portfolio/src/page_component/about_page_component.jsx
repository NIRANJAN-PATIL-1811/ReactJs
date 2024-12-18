import "./about_page_component.css";



function AboutPageComponent({logo, rating}){
  return (
    <>
      <div className="about-sub-2-div">
        <div className="logo-div">{logo}</div>
        <div className="rating">{rating}</div>
      </div>
    </>
  );
}

export default AboutPageComponent;