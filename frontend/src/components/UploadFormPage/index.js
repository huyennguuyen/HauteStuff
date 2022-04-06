import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { uploading } from "../../store/upload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./UploadForm.css";

export default function UploadForm () {
    const history= useHistory()
    const dispatch= useDispatch()
     const [errors, setErrors] = useState([])
    const [imageUrl, setImage] = useState("")
    const [description, setDescription]= useState("")
    const sessionUser = useSelector(state => state.session.user);
   const [hasSubmitted, setHasSubmitted] = useState(false)
    

    if (!sessionUser) {
        history.push("/")

    }

    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/


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

      // setHasSubmitted(true)

        const payload = {
            userId: sessionUser.id,
            imageUrl,
            description
        }

        //console.log(payload)
        //setHasSubmitted(false)

        let picture = await dispatch(uploading(payload))

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)
        
       // setHasSubmitted(false)

       if(picture) {
           history.push(`/photos/${picture.id}`)
       }

       //setHasSubmitted(false)
      

    }

   

    return (
        <>
        <div className="firstContainer"></div>
            <div className="secondContainer"></div>
            {/* {hasSubmitted && errors.length > 0 && (
                <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                    ))}
                </ul>
            )} */}
                <form onSubmit={submitting} className="forms"> 
                <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                    ))}
                </ul>
                <label>Image:</label>
                <input value={imageUrl} required onChange={(e) => setImage(e.target.value)}/>
                <label>Description:</label>
                <textarea value={description} required onChange={(e) => setDescription(e.target.value)}/>
                <button>Submit</button>
                </form>
        </>
    )

    
  

}