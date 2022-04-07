import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoButton from './DemoButton';
import UploadForm from '../UploadFormPage';
import UploadFormButton from './UploadFormButton';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    return isLoaded && (
      <>
      <nav className="nav">
        <ProfileButton user={sessionUser} />
        <NavLink exact to="/home">Home</NavLink>
        <UploadFormButton />
      </nav>
      </>
    );
  } else {
    return isLoaded && (
      <>
        <nav className="nav">
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink exact to="/">Home</NavLink>
          <DemoButton />
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