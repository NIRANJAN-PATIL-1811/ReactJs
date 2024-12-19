import AboutPageComponent from "../page_component/about_page_component";
import "./about.css";
import image from "./image.jpg";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaPython } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { GrMysql } from "react-icons/gr";
import { FaLinux } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";


function About(){
  return (
    <>
      <div className={'about-div'}>
        <div className="about-edu-div">
          <div className="about-edu-div-sub">
            I am a 2024 MCA graduate from Savitribai Phule Pune University with a strong foundation in computer science and software development. During my academic journey, I gained expertise in programming languages, web technologies, and database management. Over the past year, I have worked as a Full Stack Developer, gaining hands-on experience in both front-end and back-end development. I have worked on building and maintaining dynamic web applications using technologies like JavaScript, Node.js, React, and databases such as MySQL and MongoDB. My skills also include version control with Git, problem-solving, and debugging. I am passionate about learning new technologies and applying them to real-world projects. In addition to my technical skills, I have honed my communication and collaboration abilities, working effectively in team environments. I am eager to continue growing as a developer and contribute to innovative projects. Looking forward to new challenges that will help me expand my skills and knowledge.
          </div>
        </div>
        <div className="about-first-div">
          <AboutPageComponent logo={<IoLogoHtml5/>} logoName={'HTML5'} />
          <AboutPageComponent logo={<IoLogoCss3/>} logoName={'CSS3'} />
          <AboutPageComponent logo={<FaPython/>}  logoName={'Python'} />
          <AboutPageComponent logo={<FaNode/>}  logoName={'Node.Js'} />
          <AboutPageComponent logo={<IoLogoJavascript/>} logoName={'JavaScript'} />
          <AboutPageComponent logo={<FaJava/>} logoName={'Java'} />
          <AboutPageComponent logo={<FaReact/>} logoName={'React.Js'} />
          <AboutPageComponent logo={<DiDjango/>} logoName={'Django'} />
          
          <AboutPageComponent logo={<FaGitAlt/>} logoName={'Git'} />
          <AboutPageComponent logo={<FaDocker/>} logoName={'Docker'} />
          <AboutPageComponent logo={<LuFigma/>} logoName={'Figma'} />

          <AboutPageComponent logo={<GrMysql/>} logoName={'MySQL'} />

          <AboutPageComponent logo={<FaLinux/>} logoName={'Linux'} />
          <AboutPageComponent logo={<FaBootstrap/>} logoName={'Bootstrap'} />
        </div>
      </div>
    </>
  );
}


export default About;