import laptop from "./laptop.jpg";
import "./contact.css";
import SocialMedia from "../page_component/social_media";

function Contact(){
  return (
    <>
      <div className={'contact-div'}>
        <div className="left-contact-div">
          <div className="left-image-div">
            <img className="left-image" src={laptop} alt="laptop" />
            <div className="left-image-text-1">
            "Every design decision I make is focused on enhancing usability, improving accessibility, and ensuring that the user’s experience is both enjoyable and efficient."
            </div>
            <div className="left-image-text-2">
              <SocialMedia size={'200%'} color={'white'}/>
            </div>
          </div>
        </div>

        <div className="right-contact-div">
          <div className="form-div">
              <form action="">
                <div className="mb-3 input-div">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>                  
                </div>
                <div className="input-div-email">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                </div>
                <div className="input-div-mobile">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number (Optional)"/>
                </div>
                <div className="input-div-employer">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Employer Name"/>
                </div>
                <div className="mb-3 input-div-2">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Industry Type"/>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Size (Optional)"/>                  
                </div>
                <div className="mb-3 input-div-message">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message (Optional)"></textarea>
                </div>
                <div className="mb-3 input-div-message input-div-submit">
                  <button type="button" className="btn btn-light submit-btn">Submit</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Contact;