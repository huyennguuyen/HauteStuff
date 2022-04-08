import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { commenting } from "../../store/comments";

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
            imageId: photos.id,
            comment
            
        }

        //console.log(payload)
        //setHasSubmitted(false)

        let comments = await dispatch(commenting(photos.id, payload))

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)
        
       // setHasSubmitted(false)

       if(comments) {
           history.push(`/photos/${photos.id}`)
       }

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
                <button>Comment</button>
                </form>
            </div>
        </>
    )

    

}