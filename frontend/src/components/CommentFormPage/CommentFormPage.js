import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { uploadComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

export default function CommentFormPage ({imageId}) {
    const history= useHistory()
    const dispatch= useDispatch()
     const [errors, setErrors] = useState([])
    const [comment, setComment] = useState("")
   const sessionUser = useSelector(state => state.session.user);
   const [hasSubmitted, setHasSubmitted] = useState(false)

   const photos = useSelector((state) => {
    return state.upload[imageId]
    })

    // console.log(photos)
    //console.log(imageId)

    // const comments = useSelector((state) => {
    //     return state.comments
    // })
    

    if (!sessionUser) {
        history.push("/")

    }



    useEffect(() => {
        let errors = [];

        if(!comment.length) errors.push("Please enter a description.")
        setErrors(errors)

    }, [comment])

    const submitting = async (e) => {
        e.preventDefault()

      setHasSubmitted(true)

      if(errors.length > 0) return; 

        const payload = {
            userId: sessionUser.id,
            imageId: imageId,
            comment
            
        }

        //console.log(payload)
        //setHasSubmitted(false)

        await dispatch(uploadComment(imageId, payload))


        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)
        
       // setHasSubmitted(false)

    
        history.push(`/photos/${imageId}`)
    

       //setHasSubmitted(false)
      

    }

   

    return (
        <>
        <div className="firstContainer">
            <div className="secondContainer"></div>
                <form onSubmit={submitting} className="forms"> 
                <ul>
                {hasSubmitted && errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                    ))}
                </ul>
                <label>Comment:</label>
                <input value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button >Comment</button>
                </form>
            </div>
        </>
    )

    

}