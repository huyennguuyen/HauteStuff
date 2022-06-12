import { useDispatch, useSelector } from 'react-redux';
import {setUser} from "../../store/session"
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { useState } from 'react';


export default function DemoButton () {
const history = useHistory()
const dispatch = useDispatch()

const user = {     
    credential: 'FakeUser1',
    password: 'password2'
}




const submitting = async (e) => {
    e.preventDefault()
   

   await dispatch(sessionActions.login(user))

    history.push("/home")


}


return (
    
    <button className="demoUser" onClick={submitting} value>Demo User</button>
)


}