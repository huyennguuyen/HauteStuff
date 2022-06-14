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
        let imageFile = ["pdf", "png", "jpg", "jpeg", "gif"]
        if(!imageUrl) errors.push("Please upload an image.")

        if(imageUrl) {
            
            if(!imageFile.includes(imageUrl?.name.split(".").pop())) errors.push ("Please upload a pdf, png, jpg, jpeg, or gif file type.")
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

      const fileTypes = ["JPG", "PNG", "GIF"];

      const handleChange = (file) => {
        setImage(file);
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
                    <div className="drop-zone">
                        {/* <div className="drop-zone__thumb" around="myfile.txt"></div> */}
                        {/* <label className="imagePart">Image:</label> */}
                        <FileUploader
                                // onTypeError={(err) => setFileError('File type invalid. Recommended: .jpg .png .gif')}
                                handleChange={handleChange}
                                name='image'
                                types={fileTypes}
                            >
                                <div id="hi">
                                    {/* <img
                                        id="img-preview"
                                        src={image
                                            ? URL.createObjectURL(image)
                                            : 'https://user-images.githubusercontent.com/88916829/159394080-4d2ad2ed-9370-4268-8699-a18fb30c86a4.png'}
                                        alt='preview-upload'
                                    /> */}
                                </div>
                         </FileUploader>
                        {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
                            <div>
                            <input type="file" onChange={updateFile} name="myFile" className="drop-zone__input"/>
                            </div> */}
                        {/* </FileUploader> */}
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