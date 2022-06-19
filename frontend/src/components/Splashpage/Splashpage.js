import { useSelector } from "react-redux"
import "./SplashPage.css"
import { NavLink } from "react-router-dom";

export default function Splashpage () {
    
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            {sessionUser ?
                <>
                <div className="onlyUser">
                    <div className="textSplash">
                        <h1>Thank you for signing up!</h1>
                        <h2>Get started by uploading a photo!</h2>
                        <NavLink to="/photos/new">
                            <button className="uploadButton">Upload a Photo</button>
                        </NavLink>
                    </div>
                </div>
                </> :
                <>
                <div className="textSplash">
                    <h1>Welcome to Haute Stuff</h1>
                    <h2>Come join and become a Hauttie!</h2>
                    <NavLink to="/signup">
                        <button className="startHere">Start For Free</button>
                    </NavLink>
                </div>
                </>
            }
        </>
    )
}