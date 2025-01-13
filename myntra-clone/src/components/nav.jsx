import "../css/nav.css";
import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";



export default function Nav(){
  const [ initialVal, changeVal ] = useState('#e7e4e4a3');

  function setColor(){
    changeVal("white");
  }

  function setDefault() {
    changeVal("#e7e4e4a3");
  }
  return (
    <>
      <div className="nav-main-div">          
        <div className="links">
          <img className="link logo-image" src={'images/myntra.webp'} alt="mynta logo" width={'120rem'} />
          <Link className="link" to={'men'} >MEN</Link>
          <Link className="link" to={'women'} >WOMEN</Link>
          <Link className="link" to={'kids'} >KIDS</Link>
          <Link className="link" to={'home&living'} >HOME & LIVING</Link>
          <Link className="link" to={'beauty'} >BEAUTY</Link>
          <Link className="link" to={'studio'} >STUDIO<sup className={'new'} >NEW</sup></Link>

          <div className="search-btn-input">
            <div className="input-group flex-nowrap">
              <IoIosSearch style={{backgroundColor : initialVal}} className="search-btn"/>
              <input onFocus={setColor} onBlur={setDefault} style={{backgroundColor : initialVal}} type="text" className="form-control2" placeholder="Search for products, brands and more" aria-describedby="addon-wrapping" />
            </div>
          </div>

          <div className="three-icons-main">

            <div className="three-icons">
              <div className="three-icons-1-A">
                <CgProfile/>
              </div>

              <div className="three-icons-1-B">
                Profile
              </div>
            </div>

            <div className="three-icons">
              <div className="three-icons-1-A">
                <CiHeart/>
              </div>

              <div className="three-icons-1-B">
                Wishlist
              </div>
            </div>

            <div className="three-icons">
              <div className="three-icons-1-A">
                <HiOutlineShoppingBag/>
              </div>

              <div className="three-icons-1-B">
                Bag
              </div>
            </div>

          </div>

        </div>
      </div>

      
      
      {/* Below navigation panel */}
      
      <div className="nav-part-2-main">

        <div className="nav-part-2-main-A">
          <img width={'812rem'} src={'images/imageA.webp'} alt="imageA" />
          <img width={'812rem'} src={'images/imageB.webp'} alt="imageA" />
        </div>

      </div>
      <Outlet />
    </>
  );
}