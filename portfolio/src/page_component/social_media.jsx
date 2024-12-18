import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


function SocialMedia({ size, color}){
  return (
    <>
      <div className="digital-media" style={{ 'display': 'flex', 'justifyContent': 'center', 'height': 'auto', 'width': '100%', 'fontSize': size, 'gap' : '4%', 'color' : color}}>
        <div className="facebook"><FaFacebookSquare/></div>
        <div className="github"><FaGithubSquare/></div>
        <div className="insta"><FaSquareInstagram/></div>
        <div className="gmail"><BiLogoGmail/></div>
      </div>
    </>
  );
}

export default SocialMedia;