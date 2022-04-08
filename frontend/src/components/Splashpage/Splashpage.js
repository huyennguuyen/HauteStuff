import { useSelector } from "react-redux"

export default function Splashpage () {
    
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
        <h1>Welcome!</h1>
        {sessionUser ? 
            <h2>Boop</h2> : 
            <h2>Beep</h2>}
        </>
    )
}