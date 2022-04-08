import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getOne} from "../../store/upload"
import { NavLink } from "react-router-dom"
import "./OnePhoto.css"
import { deletingComment } from "../../store/comments"
import { useHistory } from "react-router-dom"
import CommentFormPage from "../CommentFormPage/CommentFormPage"




export default function OnePhoto () {
    const history = useHistory()
    const dispatch = useDispatch()
    const {imageId} = useParams()
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
        return state.upload[imageId]?.Comments
    })

    // console.log(comments)



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
            <button>Edit</button>
            </NavLink>
            <button onClick={async () => {
                await dispatch(deletingOne(imageId))
                history.push("/home")
            }}>Delete</button>
            <button onClick={async () => {
                await dispatch(deletingComment(commentId))
            }}>Create a Comment</button>
        </div>
        <div>
            <CommentFormPage imageId={imageId}/>
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
        <h1>One Photo</h1>
        <div className="photo-box">        
        <div className="inside">
          <img src={photos?.imageUrl}></img>
          <p className="description-one">{photos?.description}</p>
          {comments?.map((comment, idx) => (
                <div key={idx}>
                <li key={idx} className="box2">
                    <p className="text">{comment.comment}</p>
                    <button onClick=>Delete</button>
                </li>   
                </div>
                ))}
            { sessionUser?.id === photos?.userId ? loggedIn : ""} 

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