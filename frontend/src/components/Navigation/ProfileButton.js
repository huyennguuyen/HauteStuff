import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import {NavLink} from "react-router-dom";
import {ReactComponent as SVG} from "../../logo.svg";


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
    <div className="together">
      <button onClick={openMenu} className="side">
        <i className="fas fa-user-circle" />
      </button>
        <div className="outsideProfile">
          <div className="profile-dropdown">
            {showMenu && (
              <ul className="pro">
                <div className="side">
                  <div>
                    <NavLink to={`/users/${user.id}`}>            
                      <li className="username">{user.username}</li>
                    </NavLink>
                  </div>
                  <div className="user">
                    <li>{user.email}</li>
                  </div>
                  <li>
                      <NavLink to={`/users/${user.id}/edit`}> 
                        Settings
                      </NavLink>
                    </li>
                  <div className="user">
                    <li>
                      <NavLink exact to="/">
                      <button onClick={logout} className="logout">Log Out</button>
                      </NavLink>
                    </li>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
    </div>
    </>
  );
}

export default ProfileButton;