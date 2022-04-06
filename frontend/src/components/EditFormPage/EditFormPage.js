
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

    //console.log(photo)


    if (!sessionUser) {
        history.push("/")

    }

    useEffect(() => {
        let errors = [];
        
        if(!imageUrl.length) {
            errors.push("Please")
        }
    })

   

    const submitting = async (e) => {
        e.preventDefault()

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
        <div className="firstContainer"></div>
            <div className="secondContainer"></div>
                <form onSubmit={submitting} className="forms"> 
                {/* <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>
                            {error}
                        </li>
                    ))}
                </ul> */}
                <label>Image:</label>
                <input value={imageUrl} onChange={(e) => setImage(e.target.value)}/>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button type="submit">Submit</button>
                </form>
        </>
    )
}