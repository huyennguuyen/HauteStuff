import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { uploading } from "../../store/upload";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FileUploader } from 'react-drag-drop-files';
import "./UploadForm.css";

export default function UploadForm () {
    const history= useHistory()
    const dispatch= useDispatch()
     const [errors, setErrors] = useState([])
    const [imageUrl, setImage] = useState(null)
    const [imageLoading, setImageLoading] = useState(false)
    const [typeError, setTypeError] = useState("")
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
        let imageFile = ["png", "jpg", "jpeg", "gif"]
        if(!imageUrl) errors.push("Please upload an image.")

        if(imageUrl) {
            
            if(!imageFile.includes(imageUrl?.name.split(".").pop())) errors.push ("Please upload a png, jpg, jpeg, or gif file type.")
        }

        if(!description.length) errors.push("Please enter a description about your piece.")
        setErrors(errors)

    }, [imageUrl, description])

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

        setImageLoading(true)

        let picture = await dispatch(uploading(payload))

        // const pictureOne = Object.values(picture)

        // console.log(pictureOne)
        
       // setHasSubmitted(false)

       console.log("THIS IS PICTURE----", picture)
            setImageLoading(false)
           history.push(`/photos/${picture?.id}`)
     

       //setHasSubmitted(false)
      

    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        console.log("THIS IS FILE-------", file)
        if (file) setImage(file);
      };

      const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

      const handleChange = (file) => {
        setImage(file);

        const chooseButton = document.querySelector(".choose");
        chooseButton.classList.add("drop-zone__input");

      };


      const onTypeError = (error) => {
        setTypeError("Please upload a jpg, png, gif, or jpeg file type.")
      }

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
                    <div className="typeError">
                        {typeError}
                    </div>
                    <div className="loading-text">
                        {imageLoading && <p>Loading...</p>}
                    </div>
                    <div className="drop-zone">
                        <FileUploader
                                onTypeError={onTypeError}
                                handleChange={handleChange}
                                name='image'
                                types={fileTypes}
                            >
                                <div className="drop-zone-inside">
                                    {imageUrl ? <img src={URL.createObjectURL(imageUrl)} alt='upload-preview' className="upload-preview"/> : <h4 id='upload-file'>Upload a file...</h4>}
                                    <label for="file-upload" className="choose">Choose photos to upload</label>
                                    <input type="file" id="file-upload" onChange={updateFile} name="myFile"/>
                                </div>
                         </FileUploader>
                    </div>
                    <label className="imagePart">Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </div>
        </>
    )

    
  

}