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




export default function OnePhoto () {
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()
    const [users, setUsers] = useState([]);
    const sessionUser = useSelector(state => state.session.user);

   // console.log(sessionUser.id)

    // const photos = useSelector((state) => {
    //     return Object.values(state.upload)
    // })[imageId]

    const photos = useSelector((state) => {
        return state.upload[imageId]
    })

    // console.log(photos)

    const comments = useSelector((state) => {
       return state.comments
    })

     

     const loadComments = Object.values(comments)

     



    //console.log(photos)

  // console.log(photos.userId)

   //console.log("this is user that made photo", photos.User.id)

  //console.log( "this is photos.userId", photos.userId)

   //console.log("this is session user id", sessionUser.id)

   //console.log("this is photos", photos)


    if (!sessionUser) {
        history.push("/")

    }

    // const one = {};
    // photos.forEach((photo) => {
    //   one[photo.id] = photo;
    // });
    


   //console.log(one)

    // console.log(currentOne)
    
    //console.log(onePhoto)


    useEffect( () => {
      dispatch(getOne(imageId))
      dispatch(allComments(imageId))
    },[imageId, dispatch])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/users/all');
          const responseData = await response.json();
          const one = {};
          responseData.forEach((user) => {
              one[user.id] = user;
            });
            
        console.log("THIS IS response DATA-----", one)
          setUsers(one);
        }
        fetchData();
      }, []);

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
                {/* {users?.map((user) => (
                    <li>{user}</li>
                ))} */}
            </div>
            {loadComments?.map((comment, idx) => (
                <div key={idx}>
                <li key={idx} className="box2">
                    {}
                    <p className="text">{comment.comment}</p>
                    {sessionUser?.id === comment?.userId && (
                    <>
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