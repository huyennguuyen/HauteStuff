import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import { getOne} from "../../store/upload"
import { NavLink } from "react-router-dom"
import "./OnePhoto.css"
import { deletingComment } from "../../store/comments"
import { useHistory } from "react-router-dom"
import CommentFormPage from "../CommentFormPage/CommentFormPage"
import { deletingOne } from "../../store/upload"
import { allComments } from "../../store/comments"
import EditFormPage from "../EditFormPage/EditFormPage"
import { loadAll, loadAllUsers } from "../../store/allUsers"
import {FiEdit} from "react-icons/fi"
import { Modal } from "../context/Modal"
import Popup from "reactjs-popup"
import EditCommentForm from "../EditCommentForm"




export default function OnePhoto () {
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()
    // const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false)
    const sessionUser = useSelector(state => state.session.user);

    const photos = useSelector((state) => {
        return state.upload[imageId]
    })


    const comments = useSelector((state) => {
       return state.comments
    })


    const allUsers = useSelector(state => state.allUsers.user);


    // console.log("THIS IS ALL USERS--", allUsers)

     

     const loadComments = Object.values(comments)

    //  console.log("THIS IS COMMENTS---------", comments)

    //  console.log("THIS IS LOAD COMMENTS---------", loadComments)

     


    if (!sessionUser) {
        history.push("/")

    }

    // const one = {};
    // photos.forEach((photo) => {
    //   one[photo.id] = photo;
    // });

    const users = {};
    allUsers?.forEach((user) => {
      users[user.id] = user;
    });

    // console.log("THIS IS ALL USERS ONE PHOTO", users)
    


   //console.log(one)

    // console.log(currentOne)
    
    //console.log(onePhoto)

    useEffect( () => {
        dispatch(loadAllUsers())
      },[dispatch])


    useEffect( () => {
      dispatch(getOne(imageId))
      dispatch(allComments(imageId))
    },[imageId, dispatch])



    // let loggedIn;
    // if(sessionUser) {

    //     //console.log(photos.userId)
    //     //console.log({photos}.photos.userId)
    //     //console.log("sessionUser", sessionUser)
    //     //console.log("sessionId", sessionUser.id)
    //    // console.log("userid", photos.userId)
    // //if(sessionUser.id === photos.userId) {
    //    // console.log("match")
    //         loggedIn = (
    //     <>
    //     <div className="button-one-photo">
    //     <Popup
    //         trigger = {<button><FiEdit className="edit-photo-icon"/></button>}
    //         position="bottom center"
    //         nested
    //         // open={open}
    //         // onClose={close}
    //         // closeOnDocumentClick
    //     >
    //         <>
    //         <Popup
    //         trigger ={<button>Edit</button>}
    //         modal
    //         // closeOnDocumentClick
    //         >
    //             {close => (
    //                 <> 
    //                     <EditFormPage  close={close} imageId={imageId}/>

    //                 </>
    //             )}
    //         </Popup>
    //         <Popup
    //             trigger ={<button>Delete</button>}
    //             modal
    //             closeOnDocumentClick
    //         >
    //             <>
    //             <h3>Are you sure you want to delete?</h3>
    //             <button>Cancel</button>
    //             <button className="delete" onClick={async () => {
    //             await dispatch(deletingOne(imageId))
    //             history.push("/home")
    //             }}>Delete</button>
                
    //             </>

    //         </Popup>
    //         </>
    //         </Popup>
            {/* <FiEdit  className="edit-photo-icon"/>
            <NavLink to={`/photos/${imageId}/edit`}>
            <button className="edit">Edit</button>
            </NavLink>
            <button className="delete" onClick={async () => {
                await dispatch(deletingOne(imageId))
                history.push("/home")
            }}>Delete</button> */}
            {/* <button onClick={async () => {
                await dispatch(deletingComment(commentId))
            }}>Create a Comment</button> */}
        // </div>
        // </>
        //  )
      //}    
    // }

    //{sessionUser.id === photos.userId && loggedIn} 
    //{loggedIn}

    //   return (
    //     <>
    //     <h1>One Photo</h1>
    //     <div>
    //       <img src={photos?.imageUrl}></img>
    //       <p>{photos?.description}</p>
    //         {sessionUser.id === photos.userId &&(
    //         <>
    //         <NavLink to={`/photos/${imageId}/edit`}>
    //         <button>Edit</button>
    //         </NavLink>
    //         <button onClick={async () => {
    //             await dispatch(deletingOne(imageId))
    //                 history.push("/home")
    //             }}>Delete</button>
    //         </>
    //         )}
    //     </div>
    //     </>
    // )

    // const id = parseInt(req.params.id, 10)

        return (
        <>
        <div className="single-photo-box">    
            <div className="inside">
                <div className="photoDescription">
                    <img src={photos?.imageUrl} className="single-image"></img>
                    {/* { sessionUser?.id === photos?.userId ? loggedIn : ""}
                    <div className="button-one-photo"> */}
                    {/* {console.log("THIS IS PHOTOS USERID========", photos?.userId)}
                    { sessionUser?.id == photos?.userId && <FiEdit  onClick={e => setShowEditProfile(true)}/>}

                        {sessionUser?.id == photos?.userId && showEditProfile && (
                            <Modal onClose={() => setShowEditProfile(false)}> 
                                <EditFormPage closeModal={() => setShowEditProfile(false)} imageId={imageId}/>
                            </Modal>
                         )}  */}
                    <div className="popup-single">
                        <Popup
                            trigger = {sessionUser?.id == photos?.userId && <button className="edit-single-icon"><FiEdit className="edit-photo-icon"/></button>}
                            position="top right"
                            nested
                            // open={open}
                            // onClose={close}
                            closeOnDocumentClick
                        >
                            <>
                            <Popup
                            trigger ={<button className="edit-single-button">Edit</button>}
                            modal
                            // closeOnDocumentClick
                            >
                                {close => (
                                    <> 
                                        <EditFormPage  close={close} imageId={imageId}/>

                                    </>
                                )}
                            </Popup>
                            <Popup
                                trigger ={<button className="edit-single-button">Delete</button>}
                                modal
                                closeOnDocumentClick
                            >
                                {close => (
                                    <>
                                    <h3>Are you sure you want to delete?</h3>
                                    <button onClick={close}>Cancel</button>
                                    <button className="delete" onClick={async () => {
                                    await dispatch(deletingOne(imageId))
                                    history.push("/home")
                                    }}>Delete</button>    
                                    </>
                                )}
                            </Popup>
                            </>
                        </Popup>  
                    </div>
                </div>
                <div className="single-bottom">
                    <div className="single-bottom-inside">
                        <div className="creator-photo">
                            <div className="creator-photo-header">
                                {users[photos?.userId]?.profileUrl ? <img src={users[photos?.userId]?.profileUrl} className="profile-pic-single"></img>:
                                <img src="https://cdn.myportfolio.com/0da7f5fbc31f3b0a622becb5c04363c6/ee759715-7080-4029-8458-50a20bff014c_rw_1920.jpg?h=ba7face07c8aec7970909f3eb3c91045" className="profile-pic-single"></img>
                                }
                                <h4>{users[photos?.userId]?.firstName} {users[photos?.userId]?.lastName}</h4>
                            </div>
                            <p className="description-one">{photos?.description}</p>
                        </div>
                        {loadComments?.map((comment, idx) => (
                            <div key={idx}>
                            <li key={idx} className="box2">
                                {/* {console.log("THIS IS THE OTHER USERS-----",users[comment?.userId].username)} */}
                                <h4>{users[comment?.userId]?.firstName} {users[comment?.userId]?.lastName}</h4>
                                <p className="text">{comment.comment}</p>
                                {sessionUser?.id === comment?.userId && (
                                <>
                                <button onClick={() => setShowModal(!showModal)}>Edit Comment </button>
                                {showModal && <EditCommentForm commentId={comment?.id} setShowModal={setShowModal}/>}
                                <button onClick={() => {
                                    dispatch(deletingComment(comment.id))
                                    history.push(`/photos/${imageId}`)
                                }}>Delete</button>
                                </>
                                )}
                            </li>   
                            </div>
                            ))}
                        {sessionUser && (
                            <div>
                                <CommentFormPage imageId={imageId}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )



   
    

    // return (
    //     <>
    //     <h1>One Photo</h1>
    //     <div>
    //       <img src={photos?.imageUrl}></img>
    //       <p>{photos?.description}</p>
    //       <NavLink to={`/photos/${imageId}/edit`}>
    //       <button>Edit</button>
    //       </NavLink>
    //       <button onClick={async () => {
    //           await dispatch(deletingOne(imageId))
    //             history.push("/home")
    //         }}>Delete</button>       
    //     </div>
    //     </>
    // )

}