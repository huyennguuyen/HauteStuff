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
import "./ProfilePage.css"

export default function ProfilePage () {
    const dispatch = useDispatch()
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

    const currentUser = useSelector(state => state.user.user);
  
    console.log("THIS IS CURRENT USER-------", currentUser)
    console.log()
    // console

    // const close = (e) => {

    //     setShowEditProfile(true)
    //     closeTooltip()
    //     // setShowEditCover(true)
    // }
    

    useEffect( () => {
        dispatch(oneUser(userId))
      },[userId, dispatch])

    return (
        <div className="profile-container">
            <div className="inside-profile">
                <div className="up-profile" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1547737694-af7c0238463b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" + ")", 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                    <div className="inside-banner">
                        <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-pic" onClick={e => setShowEditProfile(true)}></img>
                        {showEditProfile && (
                            <Modal onClose={() => setShowEditProfile(false)}> 
                                <EditProfileModal closeModal={() => setShowEditProfile(false)}/>
                            </Modal>
                        )}
                        <div className="name-section">
                            <h2 className="profile-name-header">{currentUser?.firstName} {currentUser?.lastName}</h2>
                            <h3 className="profile-name">{currentUser?.username}</h3>
                        </div>
                        <div className="inside-menu"> 
                            <Popup
                                trigger ={<button className="profile-menu-button"><FiMoreHorizontal className="profile-menu" /></button>}
                                position="bottom left"
                                nested
                                // open={open}
                                // onClose={close}
                                closeOnDocumentClick
                            >
                                <>
                                <Popup
                                trigger ={<button>Change cover photo</button>}
                                
                                modal
                                closeOnDocumentClick
                                >
                                <EditCoverModal />
                                </Popup>
                                <button>Edit username</button>
                                <button>Edit real name</button>
                                </>
                            </Popup>
                        </div>
                    </div>
                    <div className="profile-navlinks">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )



}