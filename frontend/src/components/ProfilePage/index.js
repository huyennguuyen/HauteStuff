import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { oneUser } from "../../store/session"
import "./ProfilePage.css"

export default function ProfilePage () {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    console.log("This is sessionUser", sessionUser)
    const {userId} = useParams()
    console.log("this is userId", userId)
    const [users, setUsers] = useState([]);

    // const currentUser = useSelector(state => state.session.user);
    // console

 
    

    useEffect( () => {
        dispatch(oneUser(userId))
      },[userId, dispatch])

    return (
        <div className="profile-container">
            <div className="inside-profile">
                <h1>Hi</h1>
            </div>
        </div>
        
    )



}