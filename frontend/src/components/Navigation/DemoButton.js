import { useDispatch } from 'react-redux';
import {setUser} from "../../store/session"
import * as sessionActions from '../../store/session';
import { useState } from 'react';


export default function DemoButton () {
const dispatch = useDispatch()

const user = {     
    credential: 'FakeUser1',
    password: 'password2'
}



const submitting = (e) => {
    e.preventDefault()
   

    return dispatch(sessionActions.login(user))
}


return (
    
    <button onClick={submitting} value>Demo User</button>
)


}