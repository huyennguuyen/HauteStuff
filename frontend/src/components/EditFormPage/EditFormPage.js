
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

        let imageFile = ["png", "jpg", "jpeg", "gif"]

        if(imageUrl) {
            
            if(!imageFile.includes(imageUrl?.name.split(".").pop())) errors.push ("Please upload a png, jpg, jpeg, or gif file type.")
        }
       

        if(!description) errors.push("Please enter a description.")
        setErrors(errors)

    }, [imageUrl, description])

   

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
                <form onSubmit={submitting} className="forms"  id="editForm"> 
                    <div className="forms">
                        <ul>
                            {hasSubmitted && errors.map((error, idx) => (
                                <li key={idx} className="errors">
                                    {error}
                                </li>
                            ))}
                        </ul>
                        {/* <div>
                            <p className="editing-single">Loading</p>
                        </div> */}
                        <div>
                            {imageLoading && <p className="loading-upload editing-single">Loading...</p>}
                        </div>
                        <div className="edit-photo-input">
                            <label className="space">Image</label>
                            <input type="file" className="edit-photo-input" onChange={updateFile}/>
                        </div>
                        <div className="loginForm">
                            <label className="space">Description</label>
                            <textarea value={description} className="passwords" onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <button className="loginButton" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}