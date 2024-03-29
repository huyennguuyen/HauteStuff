
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useState, useRef } from "react"
import { oneUser } from "../../store/user"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { updateUserBanner } from "../../store/user"
import { FileUploader } from 'react-drag-drop-files';
import cancel from "./cancel.png"

import "./EditProfileModals.css"



export default function EditCoverModal ({close, userId}) {
    // const {userId} = useParams()
   
    const history= useHistory()
    const dispatch= useDispatch()
    const [errors, setErrors] = useState([])
    const [bannerUrl, setBannerUrl] = useState(null)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [typeError, setTypeError] = useState("")
    const [imageLoading, setImageLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const currentUser = useSelector(state => state.user.user);

   

    const sessionUser = useSelector(state => state.session.user);
    
    //console.log(photo)
    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    
    if (!sessionUser) {
        history.push("/")
        
    }
    
    
    useEffect( () => {
        dispatch(oneUser(userId))
      },[userId, dispatch])
    
  useEffect(() => {
      let errors = [];

      if(!bannerUrl) errors.push("Please upload a profile image.")


      setErrors(errors)

  }, [bannerUrl])

 

  const handleSubmit = async (e) => {
      e.preventDefault()

      setHasSubmitted(true)

      if (errors.length > 0) return; 

      const payload = {
          bannerUrl

      }

    

      setImageLoading(true)

      let picture = await dispatch(updateUserBanner(userId, payload))

      // const pictureOne = Object.values(picture)

      // console.log(pictureOne)

      setImageLoading(false)
      close()

    //  if(picture) {
    //      history.push(`/photos/${picture.id}`)
    //  }

  }



      const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];


      const handleChange = (file) => {
        setBannerUrl(file);

        setDisabled(false)

      };


      const onDrag = dragging => {
        // console.log(dragging)
        // setDrag(dragging)
        // console.log(dragging)
        if (dragging === false) {
            setDisabled(true)

        } else {
            setDisabled(false)
        }
      }



      const onTypeError = (error) => {
        setTypeError("Please upload a jpg, png, gif, or jpeg file type.")
      }

  return (
      <>
       <div>
            <div  onClick={close} className="close-end-profile">
                <img src={cancel} className="close-pic"></img>
            </div>
            <div >
                <form onSubmit={handleSubmit} className="forms profile-form" id="signupForm">
                    <ul className="ul-fix">
                        {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors ul-fix">{error}</li>)}
                    </ul>
                    <div className="typeError">
                    {typeError}
                    </div>
                    <div className="loading-text">
                        {imageLoading && <p className="loading-upload">Loading...</p>}
                    </div>
                    <div className="drop-prof">
                        <FileUploader
                            onTypeError={onTypeError}
                            handleChange={handleChange}
                            name='image'
                            onDraggingStateChange={onDrag}
                            types={fileTypes}
                        >
                            <div className="drop-prof-inside">
                                {bannerUrl ? <img src={URL.createObjectURL(bannerUrl)} alt='upload-preview' className="upload-preview-prof" onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87Ktf3Xk1ZjtNnEV_dzJxDB0VANB8ELKAew&usqp=CAU"
                                setTypeError("Please upload a jpg, png, gif, or jpeg file type.")
                                }}/> : disabled && 
                                <div className="text-image-prof"> 
                                    <h4 className="cover=uploading">Drag and drop file here/ Click to upload</h4>
                                </div>   
                                }
                            </div>
                        </FileUploader>
                        <div className="button-cover profile-moving">
                            <button  className="cancel-cover-button" onClick={close}>Cancel Changes</button>
                            <button type="submit" className="save-cover-button">Save Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </>
  )

}