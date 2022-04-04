import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { uploading } from "../../store/upload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./UploadForm.css";

export default function UploadForm () {
    const history= useHistory()
    const dispatch= useDispatch()
    const [photo, setPhoto] = useState("")
    const [errors, setErrors] = useState([])
    const [imageUrl, setImage] = useState("")
    const [description, setDescription]= useState("")
    
//    return(
//        <Redirect to="/home" />
//    )

    const submitting = async (e) => {
        e.preventDefault()

        const payload = {
            imageUrl,
            description
        }

        let picture = await dispatch(uploading(payload))

       if(picture) {
           history.push(`/photos/${picture.id}`)
       }

    }

    return (
        <>
        <div className="firstContainer"></div>
            <div className="secondContainer"></div>
                <form onSubmit={submitting} className="forms"> 
                <ul>
                    {/* {errors.map((error, idx) => (
                        <li key={idx}>
                            {error}
                        </li>
                    ))} */}
                </ul>
                <label>Image:</label>
                <input value={imageUrl} onChange={(e) => setImage(e.target.value)}/>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                </form>
             <button type="submit">Upload a Photo</button>
        </>
    )

}