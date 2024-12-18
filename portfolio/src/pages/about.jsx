import AboutPageComponent from "../page_component/about_page_component";
import "./about.css";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";


function About(){
  return (
    <>
      <div className={'about-div'}>
        <div className="about-first-div">
          <AboutPageComponent logo={<IoLogoHtml5/>} rating={5} />
          <AboutPageComponent logo={<IoLogoCss3/>} rating={3} />
          <AboutPageComponent/>
          <AboutPageComponent/>
          <AboutPageComponent/>
          <AboutPageComponent/>
          <AboutPageComponent/>
          <AboutPageComponent/>
        </div>
      </div>
    </>
  );
}


export default About;