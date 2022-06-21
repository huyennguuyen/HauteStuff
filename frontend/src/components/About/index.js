import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useState, useRef } from "react"
import { oneUser } from "../../store/user"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { updateUserProfile } from "../../store/user"
import { updateUser } from "../../store/user"
import { FileUploader } from 'react-drag-drop-files';
// import "./EditProfileModals.css"


export default function About ({userId}) {
   
        const history= useHistory()
        const dispatch= useDispatch()
        const [errors, setErrors] = useState([])
        const [hasSubmitted, setHasSubmitted] = useState(false)
        const currentUser = useSelector(state => state.user.user);

        const [about, setAbout] = useState(currentUser?.about)
    
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
    
          if(!about) errors.push("Please enter a short description.")
    
    
          setErrors(errors)
    
      }, [about])
    
     
    
      const submitting = async (e) => {
          e.preventDefault()
    
          setHasSubmitted(true)
    
          if (errors.length > 0) return; 
    
          const payload = {
             about
    
          }
    
          console.log("THIS IS EDIT PAYLOAD-----", payload)
    
  
    
          let picture = await dispatch(updateUser(userId, payload))
    

          // const pictureOne = Object.values(picture)
    
          // console.log(pictureOne)
    
        //  if(picture) {
        //      history.push(`/photos/${picture.id}`)
        //  }
    
      }

    
      return (
          <>
            <div className="outside-about">
                <div>
                 {currentUser?.about}
                </div>
                <div className="inside-about-form">
                    <form onSubmit={submitting} className="forms" id="editForm"> 
                    <ul>
                        {hasSubmitted && errors.map((error, idx) => (
                            <li key={idx}>
                                {error}
                            </li>
                        ))}
                    </ul>
                    <label>About</label>
                    <textarea value={about} onChange={(e) => setAbout(e.target.value)}/>
                    <button className="editSubmit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
          </>
      )
}