import React, { useState, useEffect } from "react";
import * as sessionActions from '../../store/session';
import './Navigation.css';
import {NavLink} from "react-router-dom";
// import { oneUser } from "../../store/user"
import {ReactComponent as SVG} from "../../logo.svg";
import {useDispatch, useSelector} from "react-redux"


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(state => state.user.user);
  
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

  // useEffect( () => {
  //   dispatch(oneUser(currentUser.id))
  // },[currentUser, dispatch])

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
                    <NavLink to={`/users/${currentUser.id}`}>            
                      <li className="username">{currentUser?.username}</li>
                    </NavLink>
                  </div>
                  {/* <div className="user">
                    <li>{user.email}</li>
                  </div> */}
                  <li>
                      <NavLink to={`/users/${currentUser.id}/edit`}> 
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