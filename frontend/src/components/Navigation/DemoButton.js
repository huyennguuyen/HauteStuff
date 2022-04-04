import { useDispatch } from 'react-redux';
import {setUser} from "../../store/session"
import { useState } from 'react';


export default function DemoButton () {
const dispatch = useDispatch()

const user = {
    email: "user1@user.io",       
    username: 'FakeUser1',
    password: 'password2'
}



const submitting = (e) => {
    e.preventDefault()
   

    dispatch(setUser(user))
}


return (
    
    <button onClick={submitting} value>Demo User</button>
)


}