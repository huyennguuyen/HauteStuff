import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import {NavLink} from "react-router-dom"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  
  return (
    <>
      <button onClick={openMenu} className="side">
        <i className="fas fa-user-circle" />
      </button>
      <div className="profile-dropdown">
        {showMenu && (
          <ul>
            <li className="side">{user.username}</li>
            <li className="side">{user.email}</li>
            <li className="side">
              <NavLink exact to="/">
              <button onClick={logout}>Log Out</button>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;