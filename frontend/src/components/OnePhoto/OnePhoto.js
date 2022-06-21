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
import { loadAll, loadAllUsers } from "../../store/allUsers"
import EditCommentForm from "../EditCommentForm"




export default function OnePhoto () {
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()
    // const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const photos = useSelector((state) => {
        return state.upload[imageId]
    })


    const comments = useSelector((state) => {
       return state.comments
    })


    const allUsers = useSelector(state => state.allUsers.user);


    console.log("THIS IS ALL USERS--", allUsers)

     

     const loadComments = Object.values(comments)

     console.log("THIS IS COMMENTS---------", comments)

     console.log("THIS IS LOAD COMMENTS---------", loadComments)

     


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

    console.log("THIS IS ALL USERS ONE PHOTO", users)
    


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



    let loggedIn;
    if(sessionUser) {

        //console.log(photos.userId)
        //console.log({photos}.photos.userId)
        //console.log("sessionUser", sessionUser)
        //console.log("sessionId", sessionUser.id)
       // console.log("userid", photos.userId)
    //if(sessionUser.id === photos.userId) {
       // console.log("match")
            loggedIn = (
        <>
        <div className="button-one-photo">
            <NavLink to={`/photos/${imageId}/edit`}>
            <button className="edit">Edit</button>
            </NavLink>
            <button className="delete" onClick={async () => {
                await dispatch(deletingOne(imageId))
                history.push("/home")
            }}>Delete</button>
            {/* <button onClick={async () => {
                await dispatch(deletingComment(commentId))
            }}>Create a Comment</button> */}
        </div>
        </>
         )
      //}    
    }

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


        return (
        <>
        <div className="onePhotoHeader">
            <h1 className="yourPhoto">Your Photo</h1>
        </div>
        <div className="photo-box">        
        <div className="inside">
            <div className="photoDescription">
                <img src={photos?.imageUrl}></img>
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
                    {/* {showModal && <EditCommentForm commentId={comment?.userId} setShowModal={setShowModal}/>} */}
                    <button onClick={() => {
                        dispatch(deletingComment(comment.id))
                        history.push(`/photos/${imageId}`)
                    }}>Delete</button>
                    </>
                     )}
                </li>   
                </div>
                ))}
            { sessionUser?.id === photos?.userId ? loggedIn : ""} 
            {sessionUser && (
                <div>
                    <CommentFormPage imageId={imageId}/>
                 </div>
            )}
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