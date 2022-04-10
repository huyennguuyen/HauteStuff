import { useSelector } from "react-redux"
import "./SplashPage.css"
import { NavLink } from "react-router-dom";

export default function Splashpage () {
    
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
        <div className="belowNav">
            {sessionUser ?
                <>
                <div className="textSplash">
                    <h1>Welcome</h1>
                    <h2>Boop</h2> 
                </div>
                </> :
                <>
                <div className="textSplash">
                    <h1>Welcome to Haute Stuff</h1>
                    <h2>Come join and become a Hauttie!</h2>
                    <NavLink to="/signup">
                        <button className="startHere">Start Here</button>
                    </NavLink>
                </div>
                </>
            }
        </div>
        </>
    )
}