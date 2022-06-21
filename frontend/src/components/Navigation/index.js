import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoButton from './DemoButton';
import {FaCloudUploadAlt} from "react-icons/fa"
import {ReactComponent as SVG} from "../../logo.svg"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    return isLoaded && (
      <>
      <nav className="nav">
        <div className="left-side">
          <NavLink exact to="/home" className="home">
              <div className="logo">
                <SVG className="svg"/>
                <label className="hs">HS</label>
              </div>
          </NavLink>
        </div>
        <div className="right-side sesh">
        <NavLink to="/photos/new"> 
          <FaCloudUploadAlt  className='upload-icon'/>
        </NavLink>
          <ProfileButton user={sessionUser}/>
        </div>
      </nav>
      </>
    );
  } else {
    return isLoaded && (
      <>
        <nav className="nav">
          <div className='left-side'>
            <NavLink exact to="/" className="home">
              <div className="logo-out">
                <SVG className="svg"/>
                <label className="hs">HS</label>
              </div>
            </NavLink>
          </div>
          <div className="right-side out">
            <NavLink to="/login" className="login">Log In</NavLink>
            <NavLink to="/signup" className="signup">Sign Up</NavLink>
            <DemoButton />
          </div>
        </nav>
      </>
    );
  }

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink to="/login">Log In</NavLink>
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  // return (
  //   <ul>
  //     <li>
  //       <NavLink exact to="/">Home</NavLink>
  //       {isLoaded && sessionLinks}
  //     </li>
  //   </ul>
  // );

}

export default Navigation;