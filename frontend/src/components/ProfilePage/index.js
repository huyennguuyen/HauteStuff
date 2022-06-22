import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { oneUser } from "../../store/user"
import {loading } from "../../store/upload";
import {FiMoreHorizontal} from "react-icons/fi"
import Popup from "reactjs-popup"
import { Modal } from "../context/Modal";
import EditCoverModal from "../EditProfileModals/EditCoverModal"
import EditProfileModal from "../EditProfileModals/EditProfileModal"
import ProfilePhotos from "../ProfilePhotos"
import About from "../About"
import "./ProfilePage.css"


export default function ProfilePage () {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    console.log("This is sessionUser", sessionUser)
    const {userId} = useParams()
    // const [image, setImage] = use
    console.log("this is userId", userId)
    // const [users, setUsers] = useState([]);
    const ref = useRef();
    const openTooltip = () => ref.current.open();
    const closeTooltip = () => ref.current.close();
    const toggleTooltip = () => ref.current.toggle();
    const [opening, setOpening] = useState(false);
    const close = () => setOpening(false);
    const [showEditCover, setShowEditCover] = useState(false)
    const [showEditProfile, setShowEditProfile] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showPhotos, setShowPhotos] = useState(false)
    const [first, setFirst] = useState(true)

    const currentUser = useSelector(state => state.user.user);
  
    console.log("THIS IS CURRENT USER-------", currentUser)
    // console

    // const close = (e) => {

    //     setShowEditProfile(true)
    //     closeTooltip()
    //     // setShowEditCover(true)
    // }

    if (!sessionUser) {
        history.push("/")
        
    }
    
    

    useEffect( () => {
        dispatch(oneUser(userId))
      },[userId, dispatch])

    const about = () => {
        setShowAbout(true)
        setShowPhotos(false)
        setFirst(false)
    }

    const photos = () => {
        setShowAbout(false)
        setShowPhotos(true)
        setFirst(false)
    }



    return (
        <div className="profile-container">
            <div className="inside-profile">
                {/* {currentUser?.bannerUrl ? } */}
                <div className="up-profile" 
                        style={ currentUser?.bannerUrl ? 
                        { backgroundImage: `url(${currentUser?.bannerUrl})`, 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'} :
                        { backgroundImage: "url(" + "https://images.unsplash.com/photo-1514810771018-276192729582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" + ")", 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}    
                        }>
                    <div className="inside-banner">
                        {currentUser?.profileUrl ? <img src={currentUser?.profileUrl} className="profile-pic" onClick={e => setShowEditProfile(true)}></img>:
                        <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-pic" onClick={e => setShowEditProfile(true)}></img>
                        }

                        {sessionUser?.id === currentUser?.id && showEditProfile && (
                            <Modal onClose={() => setShowEditProfile(false)}> 
                                <EditProfileModal closeModal={() => setShowEditProfile(false)} userId={userId}/>
                            </Modal>
                        )}
                        <div className="name-section">
                            <h2 className="profile-name-header">{currentUser?.firstName} {currentUser?.lastName}</h2>
                            <h3 className="profile-name">{currentUser?.username}</h3>
                        </div>
                        <div className="inside-menu"> 
                            <Popup
                                trigger ={sessionUser?.id === currentUser?.id && <button className="profile-menu-button"><FiMoreHorizontal className="profile-menu" /></button>}
                                position="bottom left"
                                nested
                                className="profile"
                                // open={open}
                                // onClose={close}
                                closeOnDocumentClick
                            >
                                <>
                                <Popup
                                trigger ={<button className="edit-single-button on-top">Change cover photo</button>}
                                className="foo"
                                modal
                                closeOnDocumentClick
                                >
                                    {close => (
                                        <> 
                                            <EditCoverModal close={close} userId={userId}/>
                                            {/* <button className="signUpButton" onClick={close}>Cancel Changes</button> */}
                                        </>
                                    )}
                                </Popup>
                                <NavLink to={`/users/${userId}/edit`}>
                                    <button className="edit-single-button">Edit username</button>
                                    <button className="edit-single-button on-bottom">Edit real name</button>
                                </NavLink>
                                </>
                            </Popup>
                        </div>
                    </div>
                    <div className="profile-navlinks">
                        {/* <NavLink to={`/users/${currentUser?.id}/about`} className="prof-link"> */}
                         <>
                            <div onClick={about} className="about-box">
                                <h2 onClick={about} className="about">About</h2>
                            </div>
                            {/* {showAbout && (
                                  <About />
                            )} */}
                            {/* </NavLink> */}
                            {/* <NavLink to={`/users/${currentUser?.id}/all-photos`} className="prof-link"> */}
                            <div onClick={photos} className="about-photos-box">
                                <h2 onClick={photos} className="about-photos">Photos</h2>
                            </div>
                            
                            {/* {showPhotos && (
                                <ProfilePhotos />
                            )} */}
                            {/* </NavLink> */}
                         </>
                    </div>
                    <div className="under-prof-nav">
                        {first && (
                         <ProfilePhotos userId={userId}/> 
                        )}
                        {showAbout && (
                            <About userId={userId}/>
                        )}
                        {showPhotos && (
                            <ProfilePhotos userId={userId}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    )



}