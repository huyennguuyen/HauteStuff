import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useState, useRef } from "react"
import { oneUser } from "../../store/user"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Settings.css"



export default function Settings () {
    const {userId} = useParams()
    const history= useHistory()
    const dispatch= useDispatch()
    const [errors, setErrors] = useState([])
    const [profileUrl, setProfileUrl] = useState(null)
    const [bannerUrl, setBannerUrl] = useState(null)
    const currentUser = useSelector(state => state.user.user);

    console.log("THIS IS CURRENT USER FROM SETTINGS", currentUser)


    const [lastName, setLastName]= useState(currentUser?.lastName)
    const [firstName, setFirstName]= useState(currentUser?.firstName)
    const [username, setUsername]= useState(currentUser?.username)
    const sessionUser = useSelector(state => state.session.user);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    
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

      // if(!(imageUrl.match(url))){
      //     errors.push("Please enter a valid URL.")
      // } else if (!imageUrl.length) {
      //     errors.push("Please enter a URl")
      // }

      if(!firstName) errors.push("Please enter a first name.")
      if(!lastName) errors.push("Please enter a last name.")
      if(!username) errors.push("Please enter a username.")
      if(!profileUrl) errors.push("Please upload a profile image.")
      if(!bannerUrl) errors.push("Please upload a banner image. ")

      setErrors(errors)

  }, [firstName, lastName, profileUrl, bannerUrl, username])

 

  const handleSubmit = async (e) => {
      e.preventDefault()

      setHasSubmitted(true)

      if (errors.length > 0) return; 

      const payload = {
          firstName, 
          lastName,
          username,
          profileUrl,
          bannerUrl

      }

      console.log("THIS IS EDIT PAYLOAD-----", payload)

    //   let picture = await dispatch(updatePhoto(imageId, payload))

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

    const updateBanner = (e) => {
        const file = e.target.files[0];
        console.log("THIS IS FILE-------", file)
        if (file) setBannerUrl(file);
      };

  return (
      <>
       <div className="firstContainer">
        <div className="inside-signup">
            <form onSubmit={handleSubmit} className="forms" id="signupForm">
            <ul>
                {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
            </ul>
            <label>
                First Name
                <input
                type="text"
                className="signing"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Last Name
                <input
                type="text"
                className="signing"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label className="sign-margin">
                Username
                <input
                type="text"
                className="signing"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Profile Picture
                <input type="file" onChange={updateProfile}/>
            </label>
            <label>
                Banner Picture
                <input type="file" onChange={updateBanner}/>
            </label>
            <button type="submit" className="signUpButton">Save Changes</button>
            </form>
        </div>
    </div>
      </>
  )







}