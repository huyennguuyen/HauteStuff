import React, { useState, useEffect } from "react";
import * as sessionActions from '../../store/session';
import './Navigation.css';
import {NavLink} from "react-router-dom";
// import { oneUser } from "../../store/user"
import { loadAllUsers } from "../../store/allUsers";
import {ReactComponent as SVG} from "../../logo.svg";
import Popup from "reactjs-popup"
import {useDispatch, useSelector} from "react-redux"


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const currentUser = useSelector(state => state.user.user);

  // console.log("THIS IS CURRENT USER------", currentUser)

  const allUsers = useSelector(state => state.allUsers.user);
  console.log("THIS IS ALL USERS----", allUsers)

  const users = {};
  allUsers?.forEach((user) => {
    users[user.id] = user;
  });
  
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

    useEffect (() => {
      dispatch(loadAllUsers())
    },[dispatch])


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  
  return (
    <>
    <div className="together">
      {users[user?.id]?.profileUrl ? <img src={users[user?.id]?.profileUrl} className="profile-nav-pic side" onClick={openMenu}></img>:
        <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-nav-pic side" onClick={openMenu}></img>
        }
        <div className="outsideProfile">
          <div className="profile-dropdown">
            {showMenu && (
              <>
              <div className="profile-menu-nav">
                <div className="pro">
                  <div className="side">
                    <div className="div-header-prof-drop">
                      <NavLink to={`/users/${user?.id}`}>            
                        <h3 className="header-prof-drop">Hi,  <li className="username"> {user?.username}!</li></h3> 
                      </NavLink>
                    </div>
                    <div className="bottom-prof-drop">
                      <div className="settings">
                        <NavLink to={`/users/${user?.id}/edit`} className="bottom-prof"> 
                          <p className="nav-text on-top">
                            Settings
                          </p>
                        </NavLink>
                      </div>        
                      <div className="settings">
                        <NavLink exact to="/" onClick={logout} className="bottom-prof">
                          <p className="nav-text on-bottom">
                            Logout
                          </p>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )}
          </div>
        </div>
    </div>
    {/* {users[user?.id]?.profileUrl ? <img src={users[user?.id]?.profileUrl} className="profile-nav-pic side" onClick={openMenu}></img>:
        <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-nav-pic side" onClick={openMenu}></img>
        }
          <ul className="pro">
            <div className="side">
              <div className="div-header-prof-drop"> 
                <NavLink to={`/users/${user?.id}`}>
                  <h3 className="header-prof-drop">Hi,  <li className="username"> {user?.username}!</li></h3>          
                </NavLink>
              </div>
              <div className="bottom-prof-drop">         
                <li className="settings on-top">
                    <NavLink to={`/users/${user?.id}/edit`} className="bottom-prof"> 
                      Settings
                    </NavLink>
                  </li>
                <div className="user">
                  <li className="settings on-bottom">
                    <NavLink exact to="/" onClick={logout} className="bottom-prof">
                    Logout
                    </NavLink>
                  </li>
              </div>
              </div>
            </div>
          </ul> */}
    </>
  );
}

export default ProfileButton;