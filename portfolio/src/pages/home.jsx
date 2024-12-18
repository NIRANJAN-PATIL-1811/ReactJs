import "./home.css";
import image from "./image.jpg";
import video from "./video.mp4";
import { IoIosArrowForward } from "react-icons/io";
import SocialMedia from "../page_component/social_media";

function Home() {
  return (
    <>
      <div className={"home-div"}>
        <div className="home-sub-1">
          <div className="left-div">
            <div className="left-sub-div">
              <div className="lines">Hi There,</div>
              <div className="lines">I'm Niranjan Patil</div>
              <div>Full-Stack Developer</div>
                <SocialMedia size={'200%'} color={'black'}/>
              <br />
              <button type="button" className="btn btn-light">Know More <IoIosArrowForward/></button>
            </div>
          </div>

          <div className="right-div">
            <div className="right-sub-div">
              <img className={'image'} src={image} alt="Niranjan Patil" width={'30%'} />
            </div>
          </div>
          </div>

          <div className="bottom-div">
            <video src={video} autoPlay loop muted></video>
            <div className="overlay">
              #Desinged with goal
            </div>

            <div className="overlay-2">
              Passion that creates intuitive, usable, and aesthetically pleasing digital products
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
