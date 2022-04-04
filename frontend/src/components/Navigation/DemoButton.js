import { useDispatch } from 'react-redux';
import {setUser} from "../../store/session"


export default async function DemoButton () {
const dispatch = useDispatch()

const submitting = (e) => {
    e.preventDefault()
    const user = {
    email: "user1@user.io",       
    username: 'FakeUser1',
    password: 'password2'
    }

    dispatch(setUser(user))
}


return (
    
    <button onClick={submitting}>Demo User</button>
)


}