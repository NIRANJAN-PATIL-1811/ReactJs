import "./about_page_component.css";

function AboutPageComponent({ logo, logoName }) {
  return (
    <>
      <div className="about-sub-2-div">
        <div className="logo-div">{logo}</div>
        <div className="logo-name">{logoName}</div>
      </div>
    </>
  );
}

export default AboutPageComponent;
