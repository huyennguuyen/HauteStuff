
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { uploading } from "../../store/upload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { updatePhoto } from "../../store/upload";
import { useParams } from "react-router-dom";
import "./EditFormPage.css"


export default function EditFormPage ({close, imageId}) {
    // const {imageId} = useParams()
    const history= useHistory()
    const dispatch= useDispatch()
     const [errors, setErrors] = useState([])
    const photo = useSelector(state => state.upload[imageId])
    // console.log("THIS IS PHOTO FROM STORE-----", photo)
    const [imageUrl, setImage] = useState(null)
    const [description, setDescription]= useState(photo?.description)
    const sessionUser = useSelector(state => state.session.user);
    const [imageLoading, setImageLoading] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    //console.log(photo)
    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    if (!sessionUser) {
        history.push("/")

    }

    useEffect(() => {
        let errors = [];

        // if(!(imageUrl.match(url))){
        //     errors.push("Please enter a valid URL.")
        // } else if (!imageUrl.length) {
        //     errors.push("Please enter a URl")
        // }

        if(!description) errors.push("Please enter a description.")
        setErrors(errors)

    }, [ description])

   

    const submitting = async (e) => {
        e.preventDefault()

        setHasSubmitted(true)

        if (errors.length > 0) return; 

        const payload = {
            // ...photo,
            userId: sessionUser.id,
            imageUrl,
            description
        }

        // console.log("THIS IS EDIT PAYLOAD-----", payload)

        setImageLoading(true)

        let picture = await dispatch(updatePhoto(imageId, payload))

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)

        setImageLoading(false)
        close()

    //    if(picture) {
    //        history.push(`/photos/${picture.id}`)
    //    }

    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        // console.log("THIS IS FILE-------", file)
        if (file) setImage(file);
      };

    return (
        <>
        <div className="edit-photo">
            <div className="edit-photo-inside">
                <form onSubmit={submitting} className="forms" id="editForm"> 
                    <ul>
                        {hasSubmitted && errors.map((error, idx) => (
                            <li key={idx}>
                                {error}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <p>Loading</p>
                    </div>
                    <div>
                        {imageLoading && <p className="loading-upload">Loading...</p>}
                    </div>
                    <label>Image</label>
                    <input type="file" onChange={updateFile}/>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button className="editSubmit" type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}