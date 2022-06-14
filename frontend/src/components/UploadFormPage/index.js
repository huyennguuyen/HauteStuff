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
    const [imageUrl, setImage] = useState(null)
    const [description, setDescription]= useState("")
    const sessionUser = useSelector(state => state.session.user);
   const [hasSubmitted, setHasSubmitted] = useState(false)
    

    if (!sessionUser) {
        history.push("/")

    }

    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    // const url = 

    useEffect(() => {
        let errors = [];

        // if(!(imageUrl.match(url))){
        //     errors.push("Please enter a valid URL.")
        // } else if (!imageUrl.length) {
        //     errors.push("Please enter a URl.")
        // }

        if(!description.length) errors.push("Please enter a description.")
        setErrors(errors)

    }, [description])

    const submitting = async (e) => {
        e.preventDefault()

      setHasSubmitted(true)

      if(errors.length > 0) return; 

        const payload = {
            userId: sessionUser.id,
            imageUrl,
            description
        }

        //console.log(payload)
        //setHasSubmitted(false)

        console.log("THIS IS PAYLOAD------", payload)

        let picture = await dispatch(uploading(payload))

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)
        
       // setHasSubmitted(false)

       console.log("THIS IS PICTURE----", picture)

           history.push(`/photos/${picture?.id}`)
     

       //setHasSubmitted(false)
      

    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        console.log("THIS IS FILE-------", file)
        if (file) setImage(file);
      };

   

    return (
        <>
        <div className="firstContainer">
            <div className="secondContainer">
                <form onSubmit={submitting} className="forms"> 
                <ul>
                {hasSubmitted && errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                    ))}
                </ul>
                <label className="imagePart">Image:</label>
                <input type="file" onChange={updateFile}/>
                <label className="imagePart">Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button className="submitButton">Submit</button>
                </form>
            </div>
        </div>
        </>
    )

    
  

}