

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useState, useRef } from "react"
import { oneUser } from "../../store/user"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { updateUserProfile } from "../../store/user"
// import "./Settings.css"



export default function EditProfileModal () {
    const {userId} = useParams()
    const history= useHistory()
    const dispatch= useDispatch()
    const [errors, setErrors] = useState([])
    const [profileUrl, setProfileUrl] = useState(null)
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

      if(!profileUrl) errors.push("Please upload a profile image.")


      setErrors(errors)

  }, [ profileUrl])

 

  const handleSubmit = async (e) => {
      e.preventDefault()

      setHasSubmitted(true)

      if (errors.length > 0) return; 

      const payload = {
          profileUrl

      }

      console.log("THIS IS EDIT PAYLOAD-----", payload)

      let picture = await dispatch(updateUserProfile(userId, payload))

      // const pictureOne = Object.values(picture)

      // console.log(pictureOne)

    //  if(picture) {
    //      history.push(`/photos/${picture.id}`)
    //  }

  }

  const updateProfile = (e) => {
      const file = e.target.files[0];
      console.log("THIS IS FILE-------", file)
      if (file) setProfileUrl(file);
    };

    // const updateBanner = (e) => {
    //     const file = e.target.files[0];
    //     console.log("THIS IS FILE-------", file)
    //     if (file) setBannerUrl(file);
    //   };

  return (
      <>
       <div className="profile-pic-edit">
        <div className="inside-profile-pic-edit">
            <form onSubmit={handleSubmit} className="forms" id="signupForm">
            <ul>
                {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
            </ul>
            <label>
                Profile Picture
                <input type="file" onChange={updateProfile}/>
            </label>
            <button type="submit" className="signUpButton">Save Changes</button>
            </form>
        </div>
    </div>
      </>
  )

}