import "./home.css";
import image from "./image.jpg";
import video from "./video.mp4";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <>
      <div className={"home-div"}>
        <div className="left-div">
          <div className="left-sub-div">
            <div className="lines">Hi There,</div>
            <div className="lines">I'm Niranjan Patil</div>
            <div>Full-Stack Developer</div>
            <div className="digital-media">
              <div className="facebook"><FaFacebookSquare/></div>
              <div className="github"><FaGithubSquare/></div>
              <div className="insta"><FaSquareInstagram/></div>
              <div className="gmail"><BiLogoGmail/></div>
            </div>
            <br />
            <button type="button" class="btn btn-light">Know More <IoIosArrowForward/></button>
          </div>
        </div>

        <div className="right-div">
          <div className="right-sub-div">
            <img className={'image'} src={image} alt="Niranjan Patil" width={'250'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
