import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { uploading } from "../../store/upload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { updateComment } from "../../store/comments";
import { useParams } from "react-router-dom";
import "./EditCommentForm.css"


export default function EditCommentForm ({commentId, setShowModal, setShowEdit}) {

  

    const history= useHistory()
    const dispatch= useDispatch()
    const [errors, setErrors] = useState([])
    const sessionUser = useSelector(state => state.session.user);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    //    const photos = useSelector((state) => {
        //     return state.upload[imageId]
        //     })
        
        // console.log(photos)
        //console.log(imageId)
        
        const oneComment = useSelector((state) => {
                return state.comments[commentId]
            })

       


            
            const [comment, setComment] = useState(oneComment?.comment)

    if (!sessionUser) {
        history.push("/")

    }


    useEffect(() => {
        let errors = [];

        if(!comment) errors.push("Please enter a comment.")
        setErrors(errors)

    }, [comment])

    const submitting = async (e) => {
        e.preventDefault()

      setHasSubmitted(true)

      if(errors.length > 0) return; 

        const payload = {
            userId: sessionUser.id,
            comment,
            
        }

        //console.log(payload)
        //setHasSubmitted(false)

        // setComment("")

        await dispatch(updateComment(commentId, payload))

        setShowModal(false)

        setShowEdit(true)

        // setComment("")

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)
        
       // setHasSubmitted(false)

    
        // history.push(`/photos/${imageId}`)

       // setComment("")
    

       //setHasSubmitted(false)
      

    }




    return (
        <>
            <div className="outside-edit-comment">
                <div className="inside-edit-comment">
                    <form onSubmit={submitting}> 
                    <input className="input-edit-val" value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <ul className="edit-comment-form">
                        {hasSubmitted && errors.map((error, idx) => (
                            <li key={idx} className="comment-errors">
                                {error}
                            </li>
                        ))}
                    </ul>
                    <div className="ending">
                        <button className="editSubmit" type="submit">Done</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}