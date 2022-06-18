
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useState, useRef } from "react"
import { oneUser } from "../../store/user"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { updateUserBanner } from "../../store/user"
// import "./Settings.css"



export default function EditCoverModal () {
    const {userId} = useParams()
    const history= useHistory()
    const dispatch= useDispatch()
    const [errors, setErrors] = useState([])
    const [bannerUrl, setBannerUrl] = useState(null)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const currentUser = useSelector(state => state.user.user);

    console.log("THIS IS CURRENT USER FROM SETTINGS", currentUser)

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

      console.log("THIS IS EDIT PAYLOAD-----", payload)

      let picture = await dispatch(updateUserBanner(userId, payload))

      // const pictureOne = Object.values(picture)

      // console.log(pictureOne)

    //  if(picture) {
    //      history.push(`/photos/${picture.id}`)
    //  }

  }


    const updateBanner = (e) => {
        const file = e.target.files[0];
        console.log("THIS IS FILE-------", file)
        if (file) setBannerUrl(file);
      };

      const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];


    //   const handleChange = (file) => {
    //     setImage(file);

    //     // const textImageDiv = document.querySelector(".text-image");
    //     // textImageDiv.classList.add("drop-zone__input");

    //     // const chooseButton = document.querySelector(".stupid-button")
    //     // chooseButton.classList.add("behind-button");

    //     setDisabled(false)

    //   };

    //   const change = (e) => {

    //     setDisabled(false)
    //   }

    //   const onDrag = dragging => {
    //     // console.log(dragging)
    //     // setDrag(dragging)
    //     // console.log(dragging)
    //     if (dragging === false) {
    //         setDisabled(true)

    //     } else {
    //         setDisabled(false)
    //     }
    //   }



    //   const onTypeError = (error) => {
    //     setTypeError("Please upload a jpg, png, gif, or jpeg file type.")
    //   }

  return (
      <>
       <div className="profile-pic-edit">
        <div className="inside-profile-pic-edit">
            <form onSubmit={handleSubmit} className="forms" id="signupForm">
            <ul>
                {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
            </ul>
            <label>
                Banner
                <input type="file" onChange={updateBanner}/>
            </label>
            <button type="submit" className="signUpButton">Save Changes</button>
            </form>
        </div>
    </div>
      </>
  )

}