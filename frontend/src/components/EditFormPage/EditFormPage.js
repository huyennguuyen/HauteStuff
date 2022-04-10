
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { uploading } from "../../store/upload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { updatePhoto } from "../../store/upload";
import { useParams } from "react-router-dom";


export default function EditFormPage () {
    const {imageId} = useParams()
    const history= useHistory()
    const dispatch= useDispatch()
     const [errors, setErrors] = useState([])
    const photo = useSelector(state => state.upload[imageId])
    const [imageUrl, setImage] = useState(`${photo.imageUrl}`)
    const [description, setDescription]= useState(`${photo.description}`)
    const sessionUser = useSelector(state => state.session.user);
    const [hasSubmitted, setHasSubmitted] = useState(false)

    //console.log(photo)
    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    if (!sessionUser) {
        history.push("/")

    }

    useEffect(() => {
        let errors = [];

        if(!(imageUrl.match(url))){
            errors.push("Please enter a valid URL.")
        } else if (!imageUrl.length) {
            errors.push("Please enter a URl")
        }

        if(!description.length) errors.push("Please enter a description.")
        setErrors(errors)

    }, [imageUrl, description])

   

    const submitting = async (e) => {
        e.preventDefault()

        setHasSubmitted(true)

        if (errors.length > 0) return; 

        const payload = {
            ...photo,
            userId: sessionUser.id,
            imageUrl,
            description
        }

        //console.log(payload)

        let picture = await dispatch(updatePhoto(imageId, payload))

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)

       if(picture) {
           history.push(`/photos/${picture.id}`)
       }

    }

    return (
        <>
        <div className="firstContainer">
                <form onSubmit={submitting} className="forms"> 
                <ul>
                    {hasSubmitted && errors.map((error, idx) => (
                        <li key={idx}>
                            {error}
                        </li>
                    ))}
                </ul>
                <label>Image:</label>
                <input value={imageUrl} onChange={(e) => setImage(e.target.value)}/>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}